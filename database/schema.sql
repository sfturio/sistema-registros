create table if not exists public.registros (
  id bigserial primary key,
  titulo varchar(120) not null,
  descricao text,
  status varchar(20) not null default 'aberto'
    check (status in ('aberto', 'em_andamento', 'concluido')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_registros_updated_at on public.registros;
create trigger trg_registros_updated_at
before update on public.registros
for each row execute procedure set_updated_at();
