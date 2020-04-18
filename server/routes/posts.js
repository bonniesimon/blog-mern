const express = require('express');
const router = express.Router();

/**
 * Importing Model
 */

const PostModel = require('./../models/postSchema');

router.get('/', (req ,res) => {
    res.status(200).json("Sucess");
})

router.post('/', (req, res) => {
    let newPost = new PostModel({
        title:"First Post",
        body:"Hey there trying to do a blogging site",
    })

    newPost.save()
        .then(savedPost => console.log(savedPost))
        .catch(err => console.log(err));
    res.status(200).json(newPost)
})

module.exports = router;
