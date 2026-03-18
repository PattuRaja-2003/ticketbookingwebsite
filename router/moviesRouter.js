const express=require('express')
const moviesController=require('../controller/moviesController')

const moviesRouter=express.Router()

moviesRouter.route('/').post(async(req,res)=>{
    let result=await moviesController.createMovies(req)
    res.status(result.code).send(result)
})
moviesRouter.route('/delete/:id').delete(async(req,res)=>{
    let result=await moviesController.deleteMovies(req)
    res.status(result.code).send(result)
})
moviesRouter.route('/edit/:id').put(async(req,res)=>{
    let result=await moviesController.editMovies(req)
    res.status(result.code).send(result)
})
moviesRouter.route('/').get(async(req,res)=>{
    let result=await moviesController.getMovies(req)
    res.status(result.code).send(result)
})
moviesRouter.route('/findOne/:id').get(async(req,res)=>{
    let result=await moviesController.findoneMovies(req)
    res.status(result.code).send(result)
})

module.exports=moviesRouter