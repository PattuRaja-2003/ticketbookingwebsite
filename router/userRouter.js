const userController=require('../controller/userController')
const express=require('express')
const userRouter=express.Router()

userRouter.route('/register').post(async(req,res)=>{
    let result= await userController.createUser(req)
    res.status(result.code).send(result)
})
userRouter.route('/login').post(async(req,res)=>{
    let result=await userController.login(req)
    res.status(result.code).send(result)
})

module.exports=userRouter