const express = require('express')
const app = express()
const db = require('./config/database')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const verifyToken = require('./auth/verify').verifyToken
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

app.use(cors())
// Async Connection to Database
try {
    async function start(){
        await db.authenticate();
    }
    console.log('Database connected...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Middleware
const routes = require('./routes')  
const users = require('./controllers/users')  
const order = require('./controllers/order')  

app.get("/",routes.index)
app.get("/api/profile",verifyToken,users.fetch)
app.post("/api/profile",jsonParser,users.register)
app.post("/api/login",jsonParser,users.login)
app.put("/api/topup",verifyToken,jsonParser,users.topup)
// app.put("/api/profile/",verifyToken,jsonParser,users.topup)
// app.post("/order",verifyToken,jsonParser,order.addOrder)


// Listening on port
const PORT = process.env.PORT || 8080
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`Listening on PORT ${PORT}`)
})