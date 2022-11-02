const express = require('express')
const router = express.Router()
const {section_1_articles_expo,section_2_articles_expo} = require('../models/submit_models')
const uuid = require('uuid')

router.post('/submit_section_1_article', (request, response) => {
    const submit_user_article = new section_1_articles_expo({

        id:request.body.id,
    
        rank:request.body.rank,
    
        cover_img_link:request.body.cover_img_link,
    
        category: request.body.category,
    
        title: request.body.title,
    
        author_name: request.body.author_name,

        author_img_link: request.body.author_img_link,
    
        description: request.body.description,
    
        details: request.body.details,

    })

    submit_user_article.save()

    .then(data => {
        console.log(data)
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


router.post('/submit_section_2_article', (request, response) => {
    const submit_user_article = new section_2_articles_expo({

        post_id:request.body.post_id,
    
        rank:request.body.rank,
    
        cover_img_link:request.body.cover_img_link,
    
        category: request.body.category,
    
        title: request.body.title,
    
        author_name: request.body.author_name,

        author_img_link: request.body.author_img_link,
    
        description_preview: request.body.description_preview,

        description: request.body.description,
    
        details: request.body.details,

    })

    submit_user_article.save()

    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})





router.get('/get_section_2_article', (request, response) => {

    section_2_articles_expo.find()

    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


router.get('/get_section_1_article', (request, response) => {

    section_1_articles_expo.find()

    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


router.get('/get_section_1_single_article', (request, response) => {
    section_2_articles_expo.find({post_id:request.query.post_id})
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router