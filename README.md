# 🔐 Secrets App

Bem-vindo ao **Secrets App**, onde segredos são mantidos (quase) seguros! 🕵️‍♂️  
Esta aplicação é simples, mas poderosa: registre-se, faça login e compartilhe seus segredos (não literalmente, por favor 😅).

---

## 🛠 O que ela faz?

- 📩 **Registro de Usuários**: Cadastre-se para entrar no clube dos segredos.  
- 🔑 **Login**: Acesse seus segredos exclusivos.  
- 🗝️ **Autenticação Simples**: Sem frescura, só o básico (por enquanto).  
- 🌟 **Página de Segredos**: O objetivo final, porque todos têm algo a esconder. 👀

---

## 📚 Tecnologias
- Node.js + Express: O coração e a alma do servidor.
- PostgreSQL: Onde seus segredos vivem (em texto puro, por enquanto... 😬).
- EJS: Para renderizar as páginas com aquele toque dinâmico.
- Body-Parser: Fazendo os formulários funcionarem como mágica.

--- 

## 🌐 Rotas
| Rota | O que faz? |
| --- | ---|
| `GET /` | Página inicial para boas-vindas. |
|`GET /login` | Página de login. |
|`GET /register` | Página de registro. |
|`POST /register` | Registra novos usuários (evitando duplicatas). |
|`POST /login` |Faz login e autentica o usuário. |

---

## 🚀 Como rodar esse show?  

1. **Clone o projeto**:
   ```bash
   git clone <URL-do-repo>
   cd <nome-do-repo>

2. **Instale as dependências necessárias:**

```bash
npm install
```

3. **Configure o PostgreSQL:**
   
Crie um banco chamado secrets e use o script abaixo para criar a tabela de usuários:

``` sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

4. **Hora do show!**
Ligue o servidor e aproveite a magia:

``` bash
node index.js
```

5. **Acesse:**
Abra o navegador e vá para http://localhost:3001. 🎉
