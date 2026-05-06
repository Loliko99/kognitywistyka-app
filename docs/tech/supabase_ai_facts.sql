create table if not exists public.ai_facts (
  id text primary key,
  title text not null,
  hook text not null,
  explanation text not null,
  example text not null,
  why_it_matters text not null,
  category text not null check (
    category in (
      'percepcja',
      'psychologia_poznawcza',
      'neurobiologia',
      'ai_i_umysl',
      'zwierzeta',
      'filozofia_umyslu'
    )
  ),
  created_at timestamptz not null default now()
);

alter table public.ai_facts enable row level security;

create policy "Public can read generated facts"
on public.ai_facts
for select
using (true);
