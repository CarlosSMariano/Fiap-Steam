# Fiap Steam - React

## Desenvolvido Por 
* **Aluno: Carlos Eduardo Sanches mariano**
* **Rm: 561756**

## 💡Resumo
Este projeto é uma pequena aplicação de catálogo de produtos, construída com foco em demonstrar a criação de endpoints e seu consumo na aplicação. O objetivo é simular uma sistema de compras simples, permitindo os usuários adicionarem novos produtos com seus respectivos preços, adiciona-lós ao carrinho de compra, verificar o total e finalizar a "compra".

---

### 🎯 Objetivo do Projeto

O projeto foi desenvolvido como um exercício prático para aplicar os seguintes conceitos:

* **Componentes:** Uso e estruturação de componentes reutilizáveis (`Produtos`, `Adicionar`).
* **Props:** Passagem de dados entre componentes (`onClick`, `children`).
* **State:** Gerenciamento do estado da aplicação (`useState` para o carrinho e estado dos botões).
* **Hooks:** Uso do `useState` para controle de estado e `useEffect` para sincronizar estados entre componentes.
* **Estilização:** Aplicação de classes utilitárias com TailwindCSS.
* **Backend:** Criação de endpoints e manipulação de banco de dados.

---

### ✨ Funcionalidades

* **Lista de Produtos:** Exibe uma lista de jogos cadastrados no banco de dados com seus respectivos botões de adição.
* **Adicionar Produtos:** Adicionar jogos no banco de dados com nome e preço.
* **Carrinho de Compras:** Adiciona itens à lista do carrinho dinamicamente.
* **Cálculo de Preço:** Calcula e exibe o preço total de todos os itens no carrinho.
* **Botões Reativos:** Os botões "Adicionar" são desabilitados após um clique e só são reabilitados após o botão "Comprar" ser pressionado.
* **Finalização de Compra:** O botão "Comprar" limpa o carrinho e reabilita todos os botões de adição.

---

### 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **Vite:** Ferramenta de build rápida e leve para projetos React.
* **TailwindCSS:** Framework CSS para estilização rápida e responsiva.
* **Express e Cors:** framework para Node.js usado para construir aplicações web e APIs.

---

### 🚀 Como Executar Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina:

1.  Clone o repositório:
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```

2.  Navegue até o diretório do projeto e siga os comando específicos do diretório:
    ```bash
    cd [nome-da-pasta]
    ```

3.  Instale as dependências:
    Back-end:
    ```bash
    npm npm init -y 
    npm install express cors
    ```
   Front-end:
    ```bash
    npm install
    ```
   

5.  Inicie o servidor de desenvolvimento:
   Back-end:
    ```bash
    node Server.js
    ```
   Front-end:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em na porta indicada pelo terminal, como: `http://localhost:5173`.
Caso Queira conferir as rotas do endpoint, ficará disponível em:  `http://localhost:5000/games`.

--- 
