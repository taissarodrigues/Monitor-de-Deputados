# Monitor de Deputados

Repositorio criado para o **6° Desafio: Aprendendo a consumir API**.

Este projeto sera uma pagina responsiva para consumir a API de deputados da Camara dos Deputados, seguindo o layout proposto, usando Bootstrap, jQuery e boas praticas com BEM.

> Status: somente arquitetura inicial. O desenvolvimento ainda nao foi iniciado.

## Objetivos

- Seguir o layout proposto.
- Criar uma interface responsiva para tablet e mobile.
- Utilizar Bootstrap.
- Utilizar jQuery.
- Consumir a API da Camara dos Deputados.
- Implementar compartilhamento em redes sociais conforme o layout.
- Publicar o resultado no GitHub Pages.

## API do desafio

```text
https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome
```

## Arquitetura de pastas

```text
Monitor-de-Deputados/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── assets/
│   ├── icons/
│   └── images/
├── docs/
│   ├── layout/
│   └── references/
├── src/
│   ├── scripts/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── styles/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── pages/
│       └── utils/
├── vendor/
│   ├── bootstrap/
│   └── jquery/
├── .gitignore
└── README.md
```

## Como usar esta arquitetura

- `assets/images`: imagens do layout e materiais do Google Drive.
- `assets/icons`: icones usados no layout e no compartilhamento social.
- `docs/layout`: referencias visuais, prints e anotacoes do layout.
- `docs/references`: links e materiais de apoio do desafio.
- `src/scripts/api`: arquivos responsaveis por configurar e consumir a API.
- `src/scripts/components`: scripts de componentes reutilizaveis.
- `src/scripts/pages`: scripts especificos de paginas.
- `src/scripts/utils`: funcoes auxiliares.
- `src/styles/base`: resets, variaveis e estilos globais.
- `src/styles/components`: estilos de componentes usando BEM.
- `src/styles/layout`: estilos de header, footer, grids e secoes.
- `src/styles/pages`: estilos especificos de paginas.
- `src/styles/utils`: classes utilitarias.
- `vendor/bootstrap`: arquivos locais do Bootstrap, caso nao seja usado CDN.
- `vendor/jquery`: arquivos locais do jQuery, caso nao seja usado CDN.

## Padrao sugerido de BEM

```text
.card-deputado
.card-deputado__imagem
.card-deputado__nome
.card-deputado__partido
.card-deputado__acao
.card-deputado--destaque
```

## Checklist futuro

- [ ] Adicionar `index.html`.
- [ ] Configurar Bootstrap.
- [ ] Configurar jQuery.
- [ ] Criar estilos base.
- [ ] Criar estrutura responsiva.
- [ ] Consumir API da Camara dos Deputados.
- [ ] Renderizar deputados do Ceara.
- [ ] Implementar compartilhamento social.
- [ ] Publicar no GitHub Pages.
- [ ] Validar layout com Design e mentor/mentora.
