# SELOUCO — Site

Site estático (HTML, CSS e JavaScript puros), pronto para GitHub Pages.

## Estrutura
```
index.html            ← raiz do repositório
css/style.css
js/main.js            ← configuração: WhatsApp, produtos, categorias, mensagens
assets/img/logo.webp
assets/img/produtos/  ← fotos reais dos produtos
```

## Editar (tudo no topo de js/main.js)
- **WhatsApp:** troque `COLOCAR_NUMERO_AQUI` em `WHATSAPP_NUMBER` (ex.: `5515999999999`). É o único lugar.
- **Mensagens:** `MSG_PRODUTO` ({produto}, {preco}) e `MSG_GERAL`.
- **Produtos:** array `products` (nome, categoria, preço, fotos, cores). Para adicionar um produto, copie uma linha, troque o `id` e os dados e coloque a foto em `assets/img/produtos/`.
- **Categorias:** array `categories`.
- **Tamanhos:** `SIZES`.
- Foto não usada no catálogo: `assets/img/produtos/itadori-01.jpeg` (camiseta Itadori).

## Publicar no GitHub Pages
1. Envie o conteúdo desta pasta para a raiz do repositório.
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
