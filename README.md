# Sistema de Gerenciamento de Alunos

Este é um sistema de gerenciamento de alunos para um programa de cursos. Ele permite que os alunos se cadastrem, façam login, visualizem os cursos disponíveis, realizem inscrições e cancelem inscrições.

## Requisitos

- Node.js
- Banco de dados relacional MySQL.

## Instalação

1. Clone o repositório:

git clone `https://github.com/HenriqueMVSS/course-track-node.git`


2. Acesse a pasta do projeto:

cd course-track-node

3. Instale as dependências:
npm install

4. Configure o banco de dados:

- Renomeie o arquivo `.env.example` para `.env`.
- Edite o arquivo `.env` e configure as variáveis de ambiente, como o nome do banco de dados, usuário, senha, etc.

5. Execute as migrations para criar as tabelas no banco de dados:

npx sequelize-cli db:migrate

6. Inicie o servidor:

npm start



A aplicação estará rodando em `http://localhost:3000`.

## Cadastrando cursos no banco de dados 

Para poder realizar a inscrição, o campo inicio deverá ser preenchido passando uma data no formato date time, exemplo: `2023-07-02 00:00:00`

## Cadastrando Usuário

Para realizar o cadastro de um usuário na aplicação é necessário passar os seguintes parametros via json:
`{
    "nome":"Henrique",
    "email":"henrique@teste.com",
    "senha":"1234"
}`

Através da rota `POST /alunos/cadastro`


## Listar Cursos

Para listar os cursos é necessário realizar o cadastro e o login na aplicação atraves da rota de login `POST /auth/login`, irá gerar um token no qual você irá copia-lo e passar via json: 
``{
    "token":"Seu token"
}``

Utiliza a rota abaixo para listar os cursos:
- `GET /cursos/cursos-disponiveis` 

Obs: Os cursos disponiveis serão apenas os que não tiveram inicio até a data de consulta.


## Realizar inscrição em um Curso
Para inscrição nos cursos é necessário esta logado na aplicação atraves da rota de login `POST /auth/login`, irá gerar um token no qual você irá copia-lo e passar via json em conjunto com o id do aluno e id do curso, segue exemplo: 
``{
    "token":"Seu token",
    "alunoId": 1,
    "cursoId": 1
}``

A inscrição deve ser realizada utilizando a rota: `POST /inscricoes/inscricao`

Também é possivel cancelar a inscricao em algum curso atraves da rota: `PUT /inscricoes/inscricao/:id/cancelar`

## Endpoints da API

A API possui os seguintes endpoints:

- `POST /alunos/cadastro`: Realiza o cadastro de um aluno.
- `POST /auth/login`: Realiza o login de um aluno.
- `POST /auth/logout`: Realiza o login de um aluno.
- `GET /cursos/cursos-disponiveis`: Retorna a lista de cursos disponíveis para inscrição.
- `POST /inscricoes/inscricao`: Realiza uma inscrição em um curso.
- `PUT /inscricoes/inscricao/:id/cancelar`: Cancela uma inscrição em um curso.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
