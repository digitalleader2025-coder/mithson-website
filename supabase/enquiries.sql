-- Run this once in Supabase: SQL Editor -> New query -> paste everything -> Run.
-- It creates the enquiries table and a private file bucket. Only the website's server can use them.

create table if not exists public.enquiries (
  id uuid primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  files jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- No policies are added, so nobody can read or change this table from a browser.
alter table public.enquiries enable row level security;

-- Private bucket with a 20 MB limit per file
insert into storage.buckets (id, name, public, file_size_limit)
values ('enquiry-files', 'enquiry-files', false, 20971520)
on conflict (id) do update set public = false, file_size_limit = 20971520;
