# peepay-ewallet
E-wallet RestAPI using NodeJS, Express, MySQL

<p align="center">
    <img src="https://img.icons8.com/color/100/00000/mysql-logo.png"/>
    <img src="https://img.icons8.com/color/100/00000/javascript--v2.png"/>
    <img src="https://img.icons8.com/color/100/00000/nodejs.png"/>
</p>

## Dokumentasi API

{{peepay}} = https://peepaywallet-v2.herokuapp.com/

### Dokumentasi
**Endpoint**        : GET {{peepay}} <br>
**Body Request**    : - <br>
***Authorization*** : - <br>

**Server Response** : <br>
***BERHASIL*** :
```
Documentation : https: //github.com/mesifer/peepay-ewallet
```

### Registrasi
**Endpoint**        : POST {{peepay}}api/profile <br>
**Body Request**    : username, email, password <br>
***Authorization*** : -  <br>
Contoh:
```
{
    "username" : "uhuy4",
    "email" : "uhuy4@gmail.com",
    "password" : "uhuy4"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "message": "Register successfully !!",
    "status": 200
}
```

### Registrasi
**Endpoint**        : POST {{peepay}}api/profile <br>
**Body Request**    : username, email, password <br>
***Authorization*** : - <br>
Contoh:
```
{
    "username" : "uhuy4",
    "email" : "uhuy4@gmail.com",
    "password" : "uhuy4"
}
```

**Server Response** :  <br>
***BERHASIL*** : <br>
```
{
    "message": "Register successfully !!",
    "status": 200
}
```

### Login
**Endpoint**        : POST {{peepay}}api/login <br>
**Body Request**    : email, password <br>
***Authorization*** : - <br>
Contoh:
```
{
    "email" : "uhuy1@gmail.com",
    "password" : "uhuy1"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "accesToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ1aHV5MUBnbWFpbC5jb20iLCJpYXQiOjE2NTUwOTI5MDgsImV4cCI6MTY1NTA5Mjk2OH0.zPEf-s5V-kUNVeMK3gx1_raI7afqX_MmGSV4SJ7_Srk",
    "status": 200
}
```

### Top Up
**Endpoint**        : PUT {{peepay}}api/topup <br>
**Body Request**    : jumlah <br>
***Authorization*** : Bearer Token  <br>
Contoh:
```
{
    "jumlah" : "3000"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "topup": 19000
}
```

### Profile
**Endpoint**        : GET {{peepay}}api/profile <br>
**Body Request**    : - <br>
***Authorization*** : Bearer Token  <br>

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "username": "uhuy1",
    "email": "uhuy1@gmail.com",
    "balance": "19000"
}
```

### Pembelian
**Endpoint**        : PUT {{peepay}}api/pembelian <br>
**Body Request**    : email, harga <br>
***Authorization*** : Bearer Token  <br>

**Server Response** :  <br>
***BERHASIL*** : 
```
{
    "email" : "uhuy1@gmail.com",
    "harga" : "1000"
}
```