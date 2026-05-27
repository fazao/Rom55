# Agência Rom55 — Site Institucional

Site institucional estático da Agência Rom55, desenvolvido em HTML, CSS e JavaScript puro.

## Estrutura

```
site/
├── index.html          # Página inicial
├── pages/
│   ├── sobre.html      # Sobre a agência
│   ├── servicos.html   # Serviços oferecidos
│   └── contato.html    # Formulário de contato
├── css/
│   ├── reset.css       # Reset de estilos
│   └── style.css       # Estilos principais
├── js/
│   └── main.js         # Scripts
├── images/             # Imagens e assets visuais
├── fonts/              # Fontes customizadas (se houver)
└── .gitignore
```

## Como usar

Abra o arquivo `index.html` diretamente no navegador, ou publique via **GitHub Pages**:

1. Vá em **Settings → Pages** no repositório
2. Selecione a branch `main` e a pasta `/` (raiz)
3. Clique em **Save** — o site ficará disponível em `https://<seu-usuario>.github.io/<repositorio>/`

## Personalização

- Cores e tipografia: edite as variáveis em `css/style.css` (seção `:root`)
- Conteúdo: edite diretamente os arquivos `.html` em `pages/`
- Imagens: adicione na pasta `images/` e referencie nos HTMLs
