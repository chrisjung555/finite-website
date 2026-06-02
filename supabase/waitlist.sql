create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now() not null
);

alter table waitlist enable row level security;

-- No public policies — inserts go through the API using the service role key.
