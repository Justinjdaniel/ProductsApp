const express = require('express');
const userRouter = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../src/model/user');


userRouter.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((err, regUser)=>{
        if(err){
            console.log(err)
        } else{
            let payload = {subject: user._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token})
            // res.status(200).send(regUser)
        }
    });
});

userRouter.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email:userData.email}, (err, user)=>{
        if (err){
            console.log(err)
        } else{
            if (!user){
                res.status(401).send('Invalid Email')
            } else{
                if( user.password !== userData.password){
                    res.status(401).send('Invalid Password')
                } else{
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
});

module.exports = userRouter;