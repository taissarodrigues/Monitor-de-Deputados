# Monitor de Bancada API

Repositorio criado para o **6° Desafio: Aprendendo a consumir API**.

Este repositorio esta organizado apenas com a arquitetura inicial para desenvolvimento no VS Code. A implementacao da API sera feita depois.

## Arquitetura de pastas

```text
MONITOR DE BANCADA_API/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── docs/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── tests/
├── .gitignore
└── README.md
```

## Objetivo do desafio

- Aprender a consumir uma API externa.
- Organizar o codigo em camadas.
- Separar rotas, regras de negocio e configuracoes.
- Documentar o funcionamento do projeto.

## Sugestao de uso das pastas

- `src/config`: configuracoes gerais do projeto.
- `src/controllers`: entrada das requisicoes e respostas.
- `src/models`: modelos ou formatos de dados.
- `src/routes`: definicao das rotas da API.
- `src/services`: comunicacao com APIs externas e regras principais.
- `docs`: anotacoes, prints e documentacao do desafio.
- `tests`: testes do projeto.
