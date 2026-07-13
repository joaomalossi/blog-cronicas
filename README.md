# Crônicas de Maresia

Site das Crônicas de Maresia — capítulos ilustrados de uma campanha solo de D&D 5e, gerados via
[Claude Code](https://claude.com/claude-code) (mestre + escrita) e [Gemini](https://ai.google.dev/)
(imagens), publicados com [Astro](https://astro.build).

Este repositório é **público** e contém só o material publicável: capítulos, imagens otimizadas e
os dados agregados/spoiler-safe da campanha (ficha, mundo, NPCs, bestiário, estatísticas). A
campanha em si — livros de regras, estado de jogo, segredos ainda não revelados — vive num
repositório privado separado; nada de lá chega aqui sem passar pelo filtro `revelado: sim`.

## Estrutura

```
src/
├── content/
│   ├── config.ts       # schema dos capítulos (content collection "posts")
│   └── posts/          # um .md por capítulo publicado
├── layouts/Layout.astro
├── components/Footer.astro
└── pages/
    ├── index.astro           # Home
    └── capitulos/[slug].astro
public/img/                   # capas e cenas otimizadas (webp), por capítulo
```

## Comandos

| Comando           | Ação                                          |
| ------------------ | ---------------------------------------------- |
| `npm install`       | Instala dependências                           |
| `npm run dev`       | Servidor local em `localhost:4321`             |
| `npm run build`     | Build de produção em `./dist/`                 |
| `npm run preview`   | Preview do build local antes de publicar       |

## Deploy

`git push` na `main` dispara o workflow `.github/workflows/deploy.yml`, que builda e publica no
GitHub Pages automaticamente. Publicação de capítulos novos é feita pelo `publicar.py` do repo
privado (`/publicar capitulo-NNN`), que copia o post + imagens pra cá e comita.

## Licença de conteúdo

Este projeto usa material do *System Reference Document 5.2* sob CC-BY-4.0. Não é afiliado à
Wizards of the Coast. Textos e ilustrações originais são © João Malossi / Malossi Studio.
