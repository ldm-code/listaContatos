# Lista de Contatos com Flask e MySQL

Projeto desenvolvido em Flask que permite cadastrar e listar contatos.  
Utiliza SQLAlchemy para gerenciar a conexão e manipulação do banco de dados MySQL.

---

## Tecnologias utilizadas

- **Python** (backend)  
- **Flask** (framework web)  
- **MySQL** (banco de dados)  
- **SQLAlchemy** (ORM para manipulação do banco)  
- **HTML** (frontend) com templates Flask (`contatos.html` e `lista.html`)

---

## Funcionalidades

- Cadastrar contatos (nome e número)  
- Listar todos os contatos cadastrados  
- Integração com banco MySQL via SQLAlchemy  
- Frontend simples com HTML usando templates Flask

---

## Observação

- A senha usada aqui não é a real do banco; por questões de segurança, altere a variável `sua_senha_do_banco` para sua própria senha antes de executar a aplicação.  
- É necessário ter um banco chamado `contatos` e configurar a conexão no seu ambiente (ex: VS Code) para que a aplicação funcione corretamente.

---

## Estrutura do Projeto

listaContatos/
├── templates/
│ ├── contatos.html ← Formulário para cadastrar contatos
│ └── lista.html ← Página para exibir contatos salvos
├── manage.py ← Script principal da aplicação Flask
└── README.md ← Este arquivo de documentação

- **templates/**: Pasta com os arquivos HTML utilizados nas rotas da aplicação.  
  - `contatos.html`: template que exibe o formulário para criar um novo contato.  
  - `lista.html`: template que lista os contatos já cadastrados no banco.

- **manage.py**: Arquivo responsável por inicializar a aplicação Flask, definir rotas, implementar lógica de cadastro e listagem de contatos, e estabelecer conexão com o banco MySQL via SQLAlchemy.

- **README.md**: Explica o propósito do projeto, tecnologias utilizadas, como usar, e agora também contém a estrutura de pastas para facilitar o entendimento.


