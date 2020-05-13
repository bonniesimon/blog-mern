const express = require('express');
const router = express.Router();


const userModel = require('./../models/Users');

/**
 * *user defined functions
 * @username : String
 * @password : String
 */

// *Validator Function
const validator = require('./utilities/validator');

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    /**
     * //TODO: save a user to DB
     * //TODO: check if user already exist
     */
    /**Checking if username and passwword are present */
    
    if (!validator(username, password)) {
        return res.status(401).json({ "Error": "No credentials" });
    }

    //Searching if user already registered
    const user = await userModel.findOne({ username: username })

    if (user) {
        res.json({ "Error": "User already Exists" });
    //If new user, then registering to DB
    } else {
        const newUser = new userModel({
            username,
            password
        })
        try{
            const savedUser = await newUser.save()
            //! The following if statement should be in the try
            //! Or the savedUser will become Undefined
            if (savedUser) {
                res.status(201).json({ "result": "success; user created" });
            }
        }catch(err){
            console.log(err);
        }
    }



})


module.exports = router;
