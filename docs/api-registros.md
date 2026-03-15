# Contrato da API - Registros

## Base
`/registros`

## Descrição
A API de registros permite listar, criar, atualizar e remover registros do sistema.

## Entidade Registro

| Campo     | Tipo   | Obrigatório | Regras |
|----------|--------|-------------|--------|
| titulo   | string | sim         | mínimo 3, máximo 120 |
| descricao| string | não         | máximo 1000 |
| status   | string | não         | `aberto`, `em_andamento`, `concluido` |

## Valor padrão
- `status`: `aberto`

## Formato padrão de resposta

### Sucesso
```json
{
  "ok": true,
  "data": {}
}
{
  "ok": false,
  "error": "mensagem de erro"
}

## GET /registros

Lista registros.

Query params:
- status (aberto | em_andamento | concluido)
- busca (texto em titulo ou descricao)

Response 200:
{
  ok: true,
  data: Registro[]
}

## POST /registros

Cria um novo registro.

Body:
- titulo (obrigatório)
- descricao (opcional)
- status (opcional)

Response 201:
{
  ok: true,
  data: Registro
}

Erro 400:
{
  ok: false,
  error: "payload invalido"
}

## PUT /registros/:id

Atualiza parcialmente um registro.

Body:
- titulo
- descricao
- status

Response 200:
{
  ok: true,
  data: Registro
}

Erros:
- 400 id invalido
- 400 payload invalido
- 404 registro nao encontrado

## DELETE /registros/:id

Remove um registro.

Response 200:
{
  ok: true
}

Erro 404:
{
  ok: false,
  error: "registro nao encontrado"
}

Validação:

- titulo obrigatório
- minimo 3 caracteres
- maximo 120
- descricao opcional max 1000
- status opcional enum