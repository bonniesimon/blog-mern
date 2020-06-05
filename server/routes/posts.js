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
    // *posts type=Array[objects]
    const posts = await PostModel.find();
    if(posts){
        res.json(posts).status(200);
    }else{
    }
    res.status(503);
})

router.post('/', authenticateJWT, (req, res) => {
    const {title, body, userId} = req.body;
    let newPost = new PostModel({
        title,
        body,
        userId
    })

    newPost.save()
        .then(savedPost => console.log(savedPost))
        .catch(err => console.log(err));
    res.status(200).json(newPost)
})

module.exports = router;
