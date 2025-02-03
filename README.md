# Sorteio Amigo Secreto 🎁
Um projeto simples e interativo para realizar sorteios de nomes, ideal para organizar um **Amigo Secreto** ou qualquer tipo de sorteio. Desenvolvido com **HTML**, **CSS** e **JavaScript**, permite que o usuário insira uma lista de nomes e, com um clique, sorteie um nome aleatório.

![Capturar](https://github.com/user-attachments/assets/6483e30e-077c-4217-9bce-4d28d5787db4)

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green?style=for-the-badge)]()


## Tabela de Conteúdos
- [Como Instalar](#Como-Instalar).
- [Como Usar](#Como-usar-e-demonstração-da-aplicação)
- [Funcionalidades](#funcionalidades)
- [Como funciona](#Como-funciona).
- [Funções do JavaScript](#Funções-do-Javascript).
- [Tecnologias Utilizadas](#Tecnologias-utilizadas)
- [Como Contribuir](#Como-contribuir)

## Instalação
Clone o repositório:

git clone https://github.com//Amigo-Secreto.git
Acesse o diretório do projeto:

cd amigo-secreto
Abra o arquivo index.html no seu navegador para usar a aplicação.

## Como usar e demonstração da aplicação
A aplicação é intuitiva, fácil de usar e conta com uma verificação de campo caso o usuário tente adicionar um nome com o campo vazio, desenvolvida para proporcionar uma experiência simples e eficiente. Veja como funciona:

1. Adicionar Nomes à Lista:

   O usuário digita o nome que deseja adicionar e, ao confirmar, o nome é automaticamente incluído em uma lista visível na tela.
   
   ![demonstracao1](https://github.com/user-attachments/assets/19c945d9-c436-4946-8064-b2c814071796)

2. Realizar o Sorteio:

   Após adicionar os nomes, o usuário clica no botão "Sortear Amigo" para iniciar o sorteio.

   ![demonstracao2](https://github.com/user-attachments/assets/25d0f143-09f0-4bc3-a8ae-192c64ef8b48)
   
3. Resultado do Sorteio:

   O nome sorteado é exibido de forma clara e destacada na tela, garantindo uma experiência transparente e divertida.
   
   ![demonstracao3](https://github.com/user-attachments/assets/c5db11e1-b345-4f24-b61e-9c8d80dda59f)

4. Validação de Entrada:

   Caso o usuário tente adicionar um nome vazio ou com caracteres não permitidos (como números ou símbolos), uma mensagem de alerta será exibida na página, informando que o campo deve 
   ser preenchido apenas com letras e espaços.
   
   ![verificacao](https://github.com/user-attachments/assets/3c074a39-ee53-40cc-872f-6601ba6e5fea)

## Funcionalidades
- ✅ Validação de entrada (apenas letras e espaços).
- ✅ Lista de nomes em tempo real.
- ✅ Sorteio aleatório com resultado destacado.

## Como Funciona

* Adicionar Amigo: O usuário pode adicionar o nome de um amigo à lista ao inserir um nome no campo de texto e em seguida, clicar no botão Adicionar.
* Verificação de Nome: A aplicação verifica a entrada, permitindo apenas entrada de letras e espaços.
* Listar Amigos: A lista de amigos é exibida abaixo do campo de input, com todos os nomes adicionados.
* Sortear Amigo Secreto: Quando o botão Sortear amigo é clicado, o script seleciona aleatoriamente um nome da lista de amigos e exibe o resultado na tela.


## Funções do JavaScript

* adicionarAmigo(): Verifica se foi inserido caracteres inválidos e caso não, adiciona o nome digitado pelo usuário à lista de amigos.
* limpaCampo(): Limpa o campo Input nome para ser digitado um novo nome.
* sortearAmigo(): Sorteia um amigo aleatoriamente da lista de amigos e exibe o nome sorteado.

## Tecnologias Utilizadas
- **HTML**: Estrutura da página.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica de sorteio e validação de entrada.

## Como Contribuir
1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`.
3. Commit suas mudanças: `git commit -m 'Adicionei uma feature'`.
4. Faça push para a branch: `git push origin feature/nova-feature`.
5. Abra um **Pull Request**.


