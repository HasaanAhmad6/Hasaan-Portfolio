-- Run this in the Supabase SQL editor if you already created documents with vector(768).
-- WARNING: truncates all existing rows (768-dim vectors are incompatible with 3072).

drop index if exists documents_embedding_idx;

truncate table documents;

alter table documents
  alter column embedding type vector(3072);

create index documents_embedding_idx
  on documents using hnsw ((embedding::halfvec(3072)) halfvec_cosine_ops);

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
