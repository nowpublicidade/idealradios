

## Problema

O GitHub Pages serve o site em `https://nowpublicidade.github.io/idealradios/` (subdiretório), mas o Vite gera os caminhos dos assets como `/assets/index-xxx.js`. O navegador busca em `nowpublicidade.github.io/assets/...` que não existe, resultando em tela branca.

## Solução

Duas alterações simples:

### 1. Adicionar `base` no `vite.config.ts`

Configurar `base: "/idealradios/"` para que todos os caminhos de assets sejam gerados corretamente para o subdiretório do GitHub Pages.

### 2. Ajustar o React Router no `App.tsx`

Adicionar `basename="/idealradios"` no `<BrowserRouter>` para que as rotas do React Router funcionem dentro do subdiretório.

### 3. Atualizar o `public/404.html`

Ajustar o script de redirecionamento SPA para considerar o prefixo `/idealradios/`.

---

**Resultado**: Ao fazer push dessas alterações, o GitHub Actions vai rebuildar e o site vai carregar corretamente em `nowpublicidade.github.io/idealradios/`.

