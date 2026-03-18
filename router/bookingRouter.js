const express=require('express');
const bookingController=require('../controller/bookingController')
const bookingRouter=express.Router()
const jwtObject=require('../middleWares/jwtVerify')

bookingRouter.route('/').post(jwtObject.verifyToken,async(req,res)=>{
    let result=await bookingController.booking(req) 
    res.status(result.code).send(result)
})
bookingRouter.route('/:id').get(async(req,res)=>{
    let result=await bookingController.getBooking(req)
    res.status(result.code).send(result)
})

module.exports=bookingRouter