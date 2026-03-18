const mongoose=require('mongoose')

const actorsModel=require('../model/actorsModel')

const actorController=new Object()

actorController.addActors=async(req)=>{
    try {
        let body=req?.body
        let result=await actorsModel.create(body)
        if(result){
            return{code:201,status:true,massage:"actor data is adding is sucessfully",data:result}
        }
        return{code:400,status:false,massage:"failed",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }

}
actorController.getActors=async(req)=>{
    try {
        let actorLimit=req.query.limit
        let result=await actorsModel.find().limit(actorLimit)
        if(result){
            return{code:201,status:true,massage:"actor data is adding is sucessfully",data:result}
        }
        return{code:400,status:false,massage:"failed",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }

}


module.exports=actorController