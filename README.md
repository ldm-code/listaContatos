# Lista de Contatos com Flask e MySQL

Projeto desenvolvido em Flask que permite cadastrar e listar contatos.  
Utiliza SQLAlchemy para gerenciar a conexão e manipulação do banco de dados MySQL.

---

## Tecnologias utilizadas

- **Python** (backend)  
- **Flask** (framework web)  
- **MySQL** (banco de dados)  
- **SQLAlchemy** (para conexao entre backend e banco)
- **HTML** (frontend basico)
- **CSS** (customização basica)

---

## Funcionalidades

- Cadastrar contatos (nome e número)  
- Listar todos os contatos cadastrados
- Apagar contato 
- Integração com banco MySQL via SQLAlchemy  
- Frontend simples com HTML usando templates Flask
- Contatos ordenados em ordem alfabetica
- Customizacao basica com CSS

---

## Observação

- A senha usada aqui não é a real do banco; por questões de segurança, altere a variável `sua_senha_do_banco` para sua própria senha antes de executar a aplicação.  
- É necessário configurar a conexão no seu ambiente (ex: VS Code) para que a aplicação funcione corretamente.
- A criacao do banco e das tabelas e realizada ao executar o arquivo banco_contatos.sql.

---

## Estrutura do Projeto

- listaContatos/
- ├── dados/
- │ └── banco_contatos.sql
- ├── static/
- │   ├── js/
- │         └── lista.js   
- │   └── css/
- │       ├── contatos.css
- │       └── lista.css    
- ├── templates/
- │ ├── contatos.html 
- │ └── lista.html 
- ├── manage.py 
- └── README.md 

- **templates/**: Pasta com os arquivos HTML utilizados nas rotas da aplicação.  
  - `contatos.html`: template que exibe o formulário para criar um novo contato.  
  - `lista.html`: template que lista os contatos já cadastrados no banco.
- - **static/**: Pasta com os arquivos estaticos para estilizacao.  
  - `contatos.css`: para estilizar contatos.html.  
  - `lista.css`: para estilizar lista.html.
  - `lista.js`: para permitir um sistema de edicao de contato mais bonito.
- **manage.py**: Arquivo responsável por inicializar a aplicação Flask, definir rotas, implementar lógica de cadastro e listagem de contatos, e estabelecer conexão com o banco MySQL via SQLAlchemy.
- **README.md**: Explica o propósito do projeto, tecnologias utilizadas, estrutura,e algumas observacoes necessarias para que a aplicacao funcione.


