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

https://peepay-v2.herokuapp.com/

## Documentation API

### GET Method

#### GET `/users`

require `authorization`

Get user database

### POST Method
#### POST `/login`

Login to get accesToken. Require body parser :
```
{
    "email" : "dummy@mail.com",
    "password": "dummy321"
}
```
#### POST `/register`

Allows user to register account to database. Require body parser :

```
{
    "name" : "dummy",
    "username" : "dummy",
    "phone" : "081234567890",
    "email" : "dummy@mail.com",
    "password": "dummy321"
}
```
#### POST `/topup`
require `authorization`

Allows user to topup account balance. Require body parser :
```
{
    "phone" : "081232681465",
    "amount" : 12000
}
```
#### 
