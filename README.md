# 📚 Minha Estante Virtual

Uma aplicação web simples para gerenciamento de leitura pessoal, desenvolvida como projeto acadêmico para o curso de Sistemas para Internet.

## 📋 Descrição

📝 Sobre o Projeto

O **Minha Estante Virtual** é uma Single Page Application (SPA) que permite ao usuário organizar seus livros em três categorias: "Estou Lendo", "Quero Ler" e "Lidos". 

O objetivo principal foi praticar a manipulação do **DOM** com JavaScript, o consumo de dados via **JSON** e a criação de layouts responsivos com **CSS Grid** e **Flexbox**.

## 🚀 Funcionalidades

* **Carregamento de Dados:** Leitura inicial de livros a partir de um arquivo `livros.json` local.
* **Organização Automática:** O script distribui os livros nas estantes corretas com base no status (`lendo`, `quero_ler`, `lido`).
* **Cálculo de Progresso:** Para livros em andamento, exibe uma barra de progresso visual baseada na página atual vs. total de páginas.
* **Adição de Livros:** Formulário em modal para adicionar novos livros à interface dinamicamente.
* **Design Responsivo:** Layout adaptável para diferentes tamanhos de tela.

## 📂 Estrutura do Projeto

```text
minha-estante/
│
├── index.html          # Estrutura principal
├── style.css           # Folha de estilos
├── script.js           # Lógica da aplicação
├── livros.json         # Base de dados inicial
└── images/             # Imagens das capas dos livros
```

## 🛠️ Tecnologias

- **HTML5:** Estrutura semântica
- **CSS3:** Estilização
- variáveis
- Flexbox e Grid Layout
- **JavaScript (ES6+):** Lógica de manipulação do DOM `async/await` para fetch API e manipulação de eventos
- **JSON:** Estrutura de dados para armazenamento dos livros

## 📦 Como Instalar

```bash
🔧 Como Executar
Para rodar este projeto localmente, você precisará de um servidor local simples, pois o navegador bloqueia requisições fetch para arquivos locais (CORS) por segurança.

Pré-requisitos
Um navegador moderno (Chrome, Firefox, Edge).
Um editor de código (recomendado: VS Code).
```

## 🚀 Como Rodar

Passo a Passo
Clone este repositório:

```Bash

git clone [https://github.com/SEU-USUARIO/minha-estante.git](https://github.com/SEU-USUARIO/minha-estante.git)
Abra a pasta no VS Code.
```

Instale a extensão "Live Server" no VS Code.

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

O projeto abrirá automaticamente no seu navegador padrão.

## 🔮 Futuras Melhorias
[ ] Implementar localStorage para persistir os novos livros após recarregar a página.
[ ] Adicionar função para excluir livros.
[ ] Permitir editar o progresso de leitura (atualizar página atual).
[ ] Consumir uma API externa de livros (ex: Google Books API).

## 👩‍💻 Autora
Desenvolvido por [Maria Isabelly]

## 📄 Licença

MIT

