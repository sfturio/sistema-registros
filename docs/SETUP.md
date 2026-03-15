# Setup Rapido

## 1) Banco (Supabase/PostgreSQL)
1. Criar projeto no Supabase.
2. Copiar a string de conexao para `backend-node/.env` em `DATABASE_URL`.
3. Executar script em `database/schema.sql` no SQL Editor do Supabase.

## 2) Backend Node
1. Ir para `backend-node/`.
2. Copiar `.env.example` para `.env`.
3. Ajustar `DATABASE_URL` do Supabase.
4. Instalar dependencias e iniciar API.

## 3) Frontend Vue
1. Ir para `frontend-vue/`.
2. Copiar `.env.example` para `.env`.
3. Definir URL da API Node.
4. Instalar dependencias e iniciar frontend.

## Endpoints base (Node)
- `GET /registros`
- `POST /registros`
- `PUT /registros/:id`
- `DELETE /registros/:id`

## Observacao
A pasta `backend-dotnet/` e opcional para estudo e nao faz parte do fluxo obrigatorio do MVP.
