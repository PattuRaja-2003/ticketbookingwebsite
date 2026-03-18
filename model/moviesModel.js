const mongoose=require('mongoose')

const moviesSchema=mongoose.Schema({
    Language:{
        type:String
    },
    Paragragh:{
        type:String
    },
    img:{
        type:String
    },
    Title:{
        type:String
    },
    duration:{
        type:String
    },
    Rateing:{
        type:String
    }
})

const moviesModel=mongoose.model('movies',moviesSchema)

module.exports=moviesModel

// let arr=[1,2,[3,4,[5,6]]];

// let stack = [...arr] //1,2,3,4,5,6
// let ans = []

// while(stack.length != 0){
//     let temp = stack.pop();
//     if(Array.isArray(temp)){
//         stack.push(...temp)
//     }else{
//         ans.unshift(temp);
//     }
// }
// console.log(ans)
