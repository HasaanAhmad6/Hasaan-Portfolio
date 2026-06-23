-- Run this in Supabase SQL editor if the chatbot returns fallback answers
-- but seeding succeeded. The browser uses the anon key, which needs read access.

-- Allow the chatbot (anon key) to search documents via match_documents
grant usage on schema public to anon, authenticated;
grant select on public.documents to anon, authenticated;
grant execute on function public.match_documents(vector(3072), int, float) to anon, authenticated;

-- Row Level Security: public read-only for portfolio content
alter table public.documents enable row level security;

drop policy if exists "Allow public read for RAG" on public.documents;
create policy "Allow public read for RAG"
  on public.documents
  for select
  to anon, authenticated
  using (true);

-- Ingestion scripts should use SUPABASE_SERVICE_ROLE_KEY (bypasses RLS for inserts).
