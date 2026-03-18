const mongoose= require('mongoose')

const actorsSchema=mongoose.Schema({
    name:{type:String},
    img:{type:String}
})

const actorsModel=mongoose.model('actor',actorsSchema)

module.exports=actorsModel