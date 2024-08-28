# Projeto_to_do_list
 <br>
 <br>


<h3>Tecnologias usadas:</h3>
O aplicativo foi desenvolvido utilizando HTML, CSS, JavaScript e React no front-end, com Node.js e Express no back-end. O banco de dados utilizado para armazenamento de informações dos usuários é SQLite.

O aplicativo faz uso dos hooks `useState` e `useEffect` do React:
- `useState`: utilizado para gerenciar o estado dos componentes, como os dados da lista de afazeres e informações do usuário logado.
- `useEffect`: usado para lidar com efeitos colaterais, como carregar o username do `localStorage` quando a página é recarregada e atualizar o DOM com base no estado atual.


<br>

<h4>Sobre o app:</h4>

O aplicativo é uma lista de afazeres com lembretes, proporcionando uma experiência simples, mas completa para o usuário.

O sistema de login realiza a validação das credenciais, verificando no banco de dados SQLite se o usuário existe e se as informações estão corretas, permitindo ou negando o acesso ao sistema.

Uma vez logado, o username do usuário é armazenado no `localStorage` através do `useEffect`. Isso garante que, mesmo após recarregar a página, o nome do usuário ainda seja exibido na interface.
