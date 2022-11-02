const mongoose = require('mongoose')
const uuid = require('uuid')

const submit_section_1_article = new mongoose.Schema({

    id:{
        type:Number,
        require:true
    },

    rank:{
        type:Number,
        require:true
    },

    cover_img_link:{
        type:String,
        require:true
    },

    category:{
        type:String,
        require:true
    },

    title:{
        type:String,
        require:true
    },

    author_name:{
        type:String,
        require:true,
    },

    author_img_link:{
        type:String,
        require:true,
    },

    date:{
        type:Date,
        default:Date.now
    },

    description:{
        type:Array,
        require:true,
    },

    details:{
        type:Array,
        require:true,
    },

})

const submit_section_2_article = new mongoose.Schema({

    post_id:{
        type:String,
        default:uuid.v4
    },

    rank:{
        type:Number,
        require:true
    },

    cover_img_link:{
        type:String,
        require:true
    },

    category:{
        type:String,
        require:true
    },

    title:{
        type:String,
        require:true
    },

    author_name:{
        type:String,
        require:true,
    },

    author_img_link:{
        type:String,
        require:true,
    },

    date:{
        type:Date,
        default:Date.now
    },

    description_preview:{
        type:String,
        require:true
    },

    description:{
        type:Array,
        require:true,
    },

    details:{
        type:Array,
        require:true,
    },

})

section_1_articles_expo = mongoose.model('section_1_articles', submit_section_1_article)
section_2_articles_expo = mongoose.model('section_2_articles', submit_section_2_article)

module.exports = {
    section_1_articles_expo: section_1_articles_expo,
    section_2_articles_expo: section_2_articles_expo
  
}