# Kanban - Sistema de Registros (Equipe de 3)

## Pessoas
- Pessoa 1: Frontend Vue
- Pessoa 2: Backend Node
- Pessoa 3: Backend .NET + PostgreSQL

## Regras rápidas
- Cada tarefa deve ter PR próprio.
- Mover tarefas de coluna conforme avanço.
- Definição de pronto: código + teste básico + documentação curta.

## Backlog
- [ ] Definir entidades finais do sistema (`Registro`, `Usuario`, `Status`).
- [ ] Definir fluxo de autenticação inicial.
- [ ] Definir padrão de resposta de API (erros/sucesso).

## To Do
- [ ] [Pessoa 1] Criar layout base (header, sidebar, listagem de registros).
- [ ] [Pessoa 1] Implementar tela de cadastro/edição de registro.
- [ ] [Pessoa 1] Integrar frontend com endpoint `GET /registros`.
- [ ] [Pessoa 2] Criar rotas Node para CRUD de registros.
- [ ] [Pessoa 2] Implementar validação de payload no Node.
- [ ] [Pessoa 2] Conectar Node ao PostgreSQL (repository real).
- [ ] [Pessoa 3] Criar migration inicial no PostgreSQL.
- [ ] [Pessoa 3] Implementar CRUD em .NET (`RegistrosController` + service + repository).
- [ ] [Pessoa 3] Configurar DI + options com env vars para conexão de banco.

## Doing
- [ ] [Pessoa 1] Ajustar estrutura MVC do frontend (views/controllers/services).
- [ ] [Pessoa 2] Estruturar container de dependências no Node.
- [ ] [Pessoa 3] Refinar `Program.cs` para configuração por ambiente.

## Review
- [ ] Revisar contratos entre frontend e APIs (campos e status codes).
- [ ] Revisar padrão de auditoria (`criado_em`, `atualizado_em`).
- [ ] Revisar documentação de setup para novos colaboradores.

## Done
- [x] Estrutura inicial de pastas do projeto criada.
- [x] README com resumo e ideia do projeto criado.
- [x] Esqueleto Vue + Node + .NET + SQL criado.
- [x] Build inicial do backend .NET validada com sucesso.

## Próxima Sprint (sugestão)
1. Fechar CRUD completo em uma API (Node ou .NET).
2. Integrar frontend no CRUD completo.
3. Entregar autenticação simples e auditoria básica.
