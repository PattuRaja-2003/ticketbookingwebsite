const mongoose=require('mongoose')
const moviesModel=require('../model/moviesModel')

const moviesController=new Object()

moviesController.createMovies=async(req)=>{
    try {
         let  body=req?.body
        let result=await moviesModel.create(body)
        if(result){
            return{code:201,status:true,massage:"movies Upload",data:{result}}
        }
        return{code:400,status:false,massage:"faild",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }
}
moviesController.deleteMovies=async(req)=>{
    try {
        let id=req?.params?.id
        let result=await moviesModel.findByIdAndDelete(id)
        if(result){
             return{code:201,status:true,massage:"movies Deleted",data:{result}}
        }
         return{code:400,status:false,massage:"faild",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }
}

moviesController.editMovies=async(req)=>{
     try {
        let id=req?.params?.id
        console.log(id)
        let body=req?.body
        let result=await moviesModel.findByIdAndUpdate(id,body,{new:true})
        if(result){
             return{code:201,status:true,massage:"movies Upadate is Sucessfully",data:{result}}
        }
         return{code:400,status:false,massage:"failed",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }
}
moviesController.getMovies=async(req)=>{
    try {
        let movieLimit = req.query.limit
        let result=await moviesModel.find().limit(movieLimit)
        if(result){
             return{code:201,status:true,massage:"movies is find",data:{result}}
        }
         return{code:400,status:false,massage:"failed",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }
}

moviesController.findoneMovies=async(req)=>{
    try {
         let id=req?.params?.id
         let result=await moviesModel.findById(id)
        if(result){
             return{code:201,status:true,massage:"movies is Find",data:{result}}
        }
         return{code:400,status:false,massage:"failed",data:{}}
    } catch (error) {
        return{code:500,status:false,massage:error}
    }
}

module.exports=moviesController