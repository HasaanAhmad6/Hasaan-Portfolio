-- Enable pgvector
create extension if not exists vector;

-- Documents table (gemini-embedding-001 default output: 3072 dimensions)
create table if not exists documents (
  id          uuid primary key default gen_random_uuid(),
  content     text not null,
  embedding   vector(3072),
  metadata    jsonb default '{}'::jsonb,
  created_at  timestamptz default now()
);

-- HNSW index on halfvec cast (pgvector indexes vector cols up to 2000 dims; 3072 needs halfvec)
create index if not exists documents_embedding_idx
  on documents using hnsw ((embedding::halfvec(3072)) halfvec_cosine_ops);

-- Similarity search function
create or replace function match_documents(
  query_embedding  vector(3072),
  match_count      int   default 8,
  match_threshold  float default 0.5
)
returns table (
  id         uuid,
  content    text,
  metadata   jsonb,
  similarity float
)
language sql stable as $$
  select
    id,
    content,
    metadata,
    1 - (embedding <=> query_embedding) as similarity
  from documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;

-- Permissions: the chatbot widget uses the anon key in the browser
grant usage on schema public to anon, authenticated;
grant select on public.documents to anon, authenticated;
grant execute on function public.match_documents(vector(3072), int, float) to anon, authenticated;

alter table public.documents enable row level security;

drop policy if exists "Allow public read for RAG" on public.documents;
create policy "Allow public read for RAG"
  on public.documents
  for select
  to anon, authenticated
  using (true);
