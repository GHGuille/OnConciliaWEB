create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  nombre text,
  fuente text default 'landing',
  estado text default 'nuevo',
  fecha_registro timestamptz default now()
);

alter table public.leads enable row level security;

-- Solo permite inserts desde el cliente (anon key)
create policy "Permitir insert público"
  on public.leads
  for insert
  to anon
  with check (true);
