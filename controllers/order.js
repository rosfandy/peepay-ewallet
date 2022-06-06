const Order = require('../models/order').orderModel
const User = require('../models/user').userModel
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

exports.addOrder = function (req,res) { 
        (async () => {
            try {
                var email = req.body.email;
                var price = req.body.price;
                var orderId = uuid.v1()
    
                const user = await User.findOne({
                    where:{
                        email: email
                    }
                })
    
                if (user) {
                    let saldo = user.balance;
                    console.log("saldo awal: ",saldo)
                    console.log("payment -",price)
                    if (saldo < price) {
                        res.status(400).send("Not enough balance !")
                        return
                    } else if (saldo > price) {
                        saldo -= price;
                        console.log("saldo sisa: ",saldo)

                        const newOrder = await Order.create({
                            order_id : orderId,
                            email : email,
                            price : price   
                        })

                        console.log(newOrder.order_id)
                        res.send("Payment Success !!")
                    }
                }

            } catch (error) {
                console.log(error)
                res.status(404).send("Something error, please check the field !!")  
            }
        })();
}