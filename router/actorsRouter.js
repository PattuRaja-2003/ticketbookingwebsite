const express=require('express')
const actorController=require('../controller/actorsController')

const actorRouter=express.Router()

actorRouter.route('/create').post(async(req,res)=>{
    let result=await actorController.addActors(req)
    res.status(result.code).send(result)
})
actorRouter.route('/').get(async(req,res)=>{
let result=await actorController.getActors(req)
res.status(result.code).send(result)
})