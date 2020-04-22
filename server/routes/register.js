const express = require('express');
const router = express.Router();


const userModel = require('./../models/Users');


router.post('/', (req, res) => {
    const {username, password} = req.body;
    /**
     * //TODO: save a user to DB
     * TODO: check if user already exist
     */
    if(!username || !password){
        return res.status(401).json({"Error":"No credentials"});
    }
    const newUser = new userModel({
        username,
        password
    })
    newUser.save()
        .then(savedUser => console.log(savedUser))
        .catch(err => console.log(err));
    res.status(200).json({"result": "success; user created"});

})


module.exports = router;
