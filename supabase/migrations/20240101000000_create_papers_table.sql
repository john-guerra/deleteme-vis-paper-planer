-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store VIS papers and their embeddings
create table if not exists public.papers (
  id uuid primary key default gen_random_uuid(),
  conference text,
  publication_year integer,
  title text not null,
  doi text,
  abstract text,
  author_names text,
  author_keywords text,
  embedding vector(384),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Note: 384 is the dimension size for Xenova/all-MiniLM-L6-v2 embeddings.

-- Create an index to speed up nearest neighbor searches (cosine distance)
create index on public.papers using hnsw (embedding vector_cosine_ops);
