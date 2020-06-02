const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/**
 * Importing Model
 */

const PostModel = require('./../models/postSchema');

// *Importing auth middleware
const authenticateJWT = require('./utilities/authenticateJWT');


router.get('/', async (req ,res) => {
    res.status(200).json("Sucess");
    const posts = await PostModel.find();
    console.log(posts)
})

router.post('/', authenticateJWT, (req, res) => {
    const {title, body} = req.body;
    let newPost = new PostModel({
        title,
        body
    })

    newPost.save()
        .then(savedPost => console.log(savedPost))
        .catch(err => console.log(err));
    res.status(200).json(newPost)
})

module.exports = router;
