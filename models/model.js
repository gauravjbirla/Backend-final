const mongoose=require('mongoose')
const empc=mongoose.model('products',
    {
        _id:String,
        title:String,
        category:String,
        image:String,
        price:String
    }
)
module.exports=empc