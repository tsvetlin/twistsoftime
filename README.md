Install dependencies

```npm install```

Run project

```npm run start```

## Authentication flow 🔑

JSON Server Auth adds a simple [JWT based](https://jwt.io/) authentication flow.

### Register 👥

Any of the following routes registers a new user :

- **`POST /register`**
- **`POST /signup`**
- **`POST /users`**

**`email`** and **`password`** are required in the request body :

```http
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

The password is encrypted by [bcryptjs](https://github.com/dcodeIO/bcrypt.js).
The response contains the JWT access token (expiration time of 1 hour) :

```http
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```

### Login 🛂

Any of the following routes logs an existing user in :

- **`POST /login`**
- **`POST /signin`**

**`email`** and **`password`** are required, of course :

```http
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

The response contains the JWT access token (expiration time of 1 hour) :

```http
200 OK
{
  "accessToken": "xxx.xxx.xxx"
}
```

### Push

- **`POST /push`**

**`Authorization: Bearer <JWT>`** in Header is required <br/>
Form-data! Key is ```file```, value is is the file.

### Sync

- **`GET /sync`**

**`Authorization: Bearer <JWT>`** in Header is required <br/> 