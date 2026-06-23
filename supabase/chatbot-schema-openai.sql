-- Enable pgvector
create extension if not exists vector;

-- Documents table (OpenAI text-embedding-3-small uses 1536 dimensions)
create table if not exists documents (
  id          uuid primary key default gen_random_uuid(),
  content     text not null,
  embedding   vector(1536),
  metadata    jsonb default '{}'::jsonb,
  created_at  timestamptz default now()
);

-- IVFFlat index for fast approximate search
create index if not exists documents_embedding_idx
  on documents using ivfflat (embedding vector_cosine_ops) with (lists = 100);

-- Similarity search function
create or replace function match_documents(
  query_embedding  vector(1536),
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