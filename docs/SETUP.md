# Setup Rapido

## 1) Banco (PostgreSQL)
1. Criar database local.
2. Executar script em `database/001_create_registros.sql`.

## 2) Backend Node
1. Ir para `backend-node/`.
2. Copiar `.env.example` para `.env`.
3. Ajustar credenciais do PostgreSQL.
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
