# Sistema de Registros - Projeto Colaborativo

## Resumo
Projeto para 3 pessoas desenvolverem um sistema de registros (cadastros e consultas) com foco em organização de dados, histórico de alterações e rastreabilidade.

## Ideia do Projeto
Criar uma plataforma web onde usuários autenticados possam:
- registrar informações (ex.: clientes, ocorrências, tarefas ou ativos);
- buscar e filtrar registros rapidamente;
- editar dados com histórico de atualização;
- visualizar métricas básicas por período.

## Stack definida
- Frontend: Vue.js (padrão MVC organizado por pastas)
- API 1: Node.js + Express (MVC)
- API 2: C# ASP.NET Core Web API (controller + service + repository)
- Banco de dados: PostgreSQL

## Equipe (3 pessoas)
- Pessoa 1: Frontend Vue + integração de telas
- Pessoa 2: Backend Node + regras de negócio
- Pessoa 3: Backend .NET + banco PostgreSQL + infraestrutura

## Objetivo inicial (MVP)
1. CRUD de registros
2. Filtro por data/status
3. Login simples
4. Auditoria básica (criado em / atualizado em)
