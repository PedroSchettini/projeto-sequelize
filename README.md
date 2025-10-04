# 🚀 Sistema de Usuários com Node.js e Sequelize

Um sistema completo de gerenciamento de usuários desenvolvido com Node.js, Express, Sequelize e PostgreSQL (Aiven).

## 📋 Funcionalidades

- ✅ **CRUD de Usuários**: Criar, listar, visualizar, editar e excluir usuários
- ✅ **Sistema de Endereços**: Associar múltiplos endereços a cada usuário
- ✅ **Interface Web**: Interface visual moderna usando Handlebars
- ✅ **Validações**: Validações de dados tanto no frontend quanto backend
- ✅ **Design Responsivo**: Compatível com dispositivos móveis
- ✅ **Conexão Cloud**: Banco de dados PostgreSQL hospedado no Aiven

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Banco de Dados**: PostgreSQL (hospedado no Aiven)
- **ORM**: Sequelize
- **Template Engine**: Express Handlebars
- **Styling**: CSS moderno com Flexbox e Grid
- **Ambiente**: dotenv para variáveis de ambiente

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js (versão 14 ou superior)
- Conta no Aiven (para PostgreSQL cloud)

### 2. Instalação
```bash
# Clone ou baixe o projeto e em seguida entre na diretório dele
cd projeto-sequelize

# Instale as dependências
npm install
```

### 3. Configuração do Banco de Dados

#### Opção A: Criar banco local PostgreSQL
```sql
CREATE DATABASE nodesequelize;
```

#### Opção B: Usar Aiven (Recomendado)
1. Crie uma conta em [Aiven Console](https://console.aiven.io/)
2. Crie um projeto
3. Adicione serviço PostgreSQL (Developer Sandbox - GRATUITO)
4. Adicione um banco de dados com o nome de nodesequelize
5. Configure as variáveis de ambiente:

**Crie um arquivo `.env` na raiz do projeto:**
```env
DB_HOST=pg-seuservico-projeto.aivencloud.com
DB_PORT=12345
DB_NAME=defaultdb
DB_USER=avnadmin
DB_PASSWORD=sua_senha_aqui
```

### 4. Executar a Aplicação
```bash
# Modo desenvolvimento (com reinicialização automática)
npm run dev

# Modo produção
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

## 📊 Modelos de Dados

### 👤 Usuário (User)
- `id`: Chave primária (auto incremento)
- `name`: Nome completo (obrigatório, 2-100 caracteres)
- `occupation`: Profissão (opcional, até 150 caracteres)
- `newsletter`: Newsletter (boolean, padrão: false)
- `createdAt`: Data de criação (automático)
- `updatedAt`: Data de atualização (automático)

### 🏠 Endereço (Address)
- `id`: Chave primária (auto incremento)
- `userId`: Chave estrangeira para User
- `street`: Rua/Avenida (obrigatório, 5-200 caracteres)
- `number`: Número (opcional, até 20 caracteres)
- `city`: Cidade (obrigatório, 2-100 caracteres)
- `createdAt`: Data de criação (automático)
- `updatedAt`: Data de atualização (automático)

### 🔗 Relacionamentos
- **1 usuário** pode ter **muitos endereços**
- **1 endereço** pertence a **1 usuário**

## 🌐 Rotas da API

### Usuários
- `GET /` - Lista todos os usuários
- `GET /users/create` - Exibe formulário de cadastro
- `POST /users/create` - Cria novo usuário
- `GET /users/:id` - Visualiza detalhes do usuário
- `GET /users/edit/:id` - Exibe formulário de edição
- `POST /users/update` - Atualiza usuário
- `POST /users/delete/:id` - Remove usuário

### Endereços
- `POST /address/create` - Adiciona endereço ao usuário
- `POST /address/delete` - Remove endereço

### Páginas Principais
1. **Página Inicial (`/`)**: Listagem de usuários em cards com ações
2. **Cadastro (`/users/create`)**: Formulário de novo usuário
3. **Detalhes (`/users/:id`)**: Informações completas + endereços
4. **Edição (`/users/edit/:id`)**: Editar dados + gerenciar endereços

## 🔧 Scripts Disponíveis

```bash
npm start      # Executa em modo produção
npm run dev     # Executa em modo desenvolvimento com nodemon
```

### Variáveis de Ambiente Necessárias
```env
DB_HOST=camada de conexão do banco
DB_PORT=porta do banco
DB_NAME=nome do banco
DB_USER=usuário do banco
DB_PASSWORD=senha do banco
```

## 👨‍💻 Autor

**Pedro Schettini** - Instituto Germinare - 3F