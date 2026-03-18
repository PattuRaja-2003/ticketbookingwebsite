const mongoose=require('mongoose');
const bookingModel=require('../model/bookingModel')
const bookingContoller=new Object()

bookingContoller.booking=async(req)=>{
    try {
        let body=req.body
        let user=req.user
        body.userId=user._id
        let result=await bookingModel.create(body)
        console.log(result)
        if(result){
            return{code:201,status:true,massage:"Booking is Successfull",data:{result}}
        }
        return{code:400,status:false,massage:"Booking is Failed", data:{}}
    } catch (error) {
        return{code:500, status:500,message:error} 
    }
}
bookingContoller.getBooking=async(req)=>{
    try {
        let id=req.params.id
        let result=await bookingModel.findById(id)
        if(result){
            return{code:200,status:true,massage:"Booking is Found",data:{result}}
        }
        return{code:404,status:false,massage:"Booking is Not Found",data:{}}

    } catch (error) {
        console.log(error)
        return{code:500, status:500,message:error}
    }
}
module.exports=bookingContoller