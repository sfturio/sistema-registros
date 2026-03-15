# Sistema de Registros MVC

Projeto de estudo para 3 pessoas com foco em portfolio: simples para executar, profissional na organizacao e documentacao.

## Objetivo
Entregar um sistema web de registros com:
- cadastro, listagem, edicao e exclusao;
- filtros por status e periodo;
- trilha basica de auditoria (`created_at`, `updated_at`);
- base solida para apresentar em portfolio.

## Stack principal (MVP)
- Frontend: Vue.js
- Backend: Node.js + Express
- Banco: Supabase (PostgreSQL)

## Escopo tecnico
- Arquitetura MVC enxuta (controller, service, repository).
- Contrato de API padronizado.
- Validacao de dados no backend.
- Setup local rapido para onboarding.

## Equipe (3 pessoas)
- Pessoa 1: Frontend (Vue + integracao API)
- Pessoa 2: Backend Node (regras de negocio + API)
- Pessoa 3: Banco e DevOps (Supabase/PostgreSQL e ambiente)

## Estrutura
- `frontend-vue/`: interface e consumo de API
- `backend-node/`: API principal do projeto
- `database/`: schema inicial SQL do Supabase
- `docs/`: arquitetura, setup e kanban
- `backend-dotnet/`: trilha opcional de estudo (nao e caminho principal do MVP)
