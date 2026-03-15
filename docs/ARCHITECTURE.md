# Arquitetura (MVP de Portfolio)

## Direcao
Este projeto segue uma arquitetura simples e profissional:

`Vue (UI) -> API Node (Express) -> PostgreSQL`

## Camadas (Backend Node)
- Controller: recebe request e valida entrada basica.
- Service: aplica regras de negocio.
- Repository: acessa dados no PostgreSQL.

## MVC no Frontend
- Views: telas e componentes principais.
- Services: chamadas HTTP para API.
- Models: tipos/estrutura dos dados de tela.

## O que nao entra no MVP
- Microservicos.
- Mensageria/event bus.
- Duas APIs ativas em producao.
- Complexidade de infraestrutura sem necessidade.

## Trilha opcional
`backend-dotnet/` fica como estudo paralelo de C#/.NET, sem bloquear a entrega principal em Node.
