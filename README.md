# Fiap Steam - React

## Desenvolvido Por 
* **Aluno: Carlos Eduardo Sanches mariano**
* **Rm: 561756**

## 💡Resumo
Este projeto é uma pequena aplicação de catálogo de produtos, construída com foco em demonstrar os fundamentos do React. O objetivo é simular um carrinho de compras simples, permitindo aos usuários adicionar itens, ver o total e finalizar a "compra".

---

### 🎯 Objetivo do Projeto

O projeto foi desenvolvido como um exercício prático para aplicar os seguintes conceitos:

* **Componentes:** Uso e estruturação de componentes reutilizáveis (`Produtos`, `Adicionar`).
* **Props:** Passagem de dados entre componentes (`onClick`, `children`).
* **State:** Gerenciamento do estado da aplicação (`useState` para o carrinho e estado dos botões).
* **Hooks:** Uso do `useState` para controle de estado e `useEffect` para sincronizar estados entre componentes.
* **Estilização:** Aplicação de classes utilitárias com TailwindCSS.

---

### ✨ Funcionalidades

* **Lista de Produtos:** Exibe uma lista de jogos com seus respectivos botões de adição.
* **Carrinho de Compras:** Adiciona itens à lista do carrinho dinamicamente.
* **Cálculo de Preço:** Calcula e exibe o preço total de todos os itens no carrinho.
* **Botões Reativos:** Os botões "Adicionar" são desabilitados após um clique e só são reabilitados após o botão "Comprar" ser pressionado.
* **Finalização de Compra:** O botão "Comprar" limpa o carrinho e reabilita todos os botões de adição.

---

### 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **Vite:** Ferramenta de build rápida e leve para projetos React.
* **TailwindCSS:** Framework CSS para estilização rápida e responsiva.

---

### 🚀 Como Executar Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina:

1.  Clone o repositório:
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd [nome-da-pasta]
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em na porta indicada pelo terminal, como: `http://localhost:5173`.

--- 
