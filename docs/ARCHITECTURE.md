# Arquitetura MVC (Base)

## Estrutura
- `frontend-vue/`: views + controllers + models para interface
- `backend-node/`: API em Node com MVC
- `backend-dotnet/`: API em ASP.NET Core com DI e options
- `database/`: scripts SQL e configuração PostgreSQL

## Convenções
- Model: representa os dados
- View: apresentação (frontend) / resposta (backend)
- Controller: coordena fluxo de requisição
- Service/Repository: regras de negócio e persistência

## Configuração por ambiente
Usar arquivo `.env` na raiz de cada backend com:
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `ASPNETCORE_ENVIRONMENT` (para backend .NET)
