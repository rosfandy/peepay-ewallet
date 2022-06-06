# peepay-ewallet
E-wallet RestAPI using NodeJS, Express, MySQL

<p align="center">
    <img src="https://img.icons8.com/color/100/00000/mysql-logo.png"/>
    <img src="https://img.icons8.com/color/100/00000/javascript--v2.png"/>
    <img src="https://img.icons8.com/color/100/00000/nodejs.png"/>
</p>

## Progress FP
Milestone 1 :
1. Register (OK)
2. Login    (OK)
3. Topup    (OK)

*tambahan

Frontend Home, Login, Register

Milestone 2 :
1. Payment
2. Transfer
3. Pulsa

https://peepaywallet.herokuapp.com/

## Documentation API

### GET Method

#### GET `/users`

require `authorization`

Get user database

### POST Method
#### POST `api/login`

Login to get accesToken. Require body parser :
```
{
    "email" : "dummy@mail.com",
    "password": "dummy321"
}
```
#### POST `api/profile`

Allows user to register account to database. Require body parser :

```
{
    "username" : "dummy",
    "email" : "dummy@mail.com",
    "password": "dummy321"
}
```
#### POST `api/topup`
require `authorization`

Allows user to topup account balance. Require body parser :
```
{
    "amount" : 12000
}
```
#### 
