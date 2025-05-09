const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subcategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'categories',
        required:true
    }
} ,{timestamps:true})

module.exports = mongoose.model('subcategories',subcategorySchema)