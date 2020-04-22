const express = require('express');
const router = express.Router();


const userModel = require('./../models/Users');


router.post('/', async (req, res) => {
    const { username, password } = req.body;
    /**
     * //TODO: save a user to DB
     * TODO: check if user already exist
     */
    /**Checking if username and passwword are present */
    if (!username || !password) {
        return res.status(401).json({ "Error": "No credentials" });
    }

    //Searching if user already registered
    const user = await userModel.findOne({ username: username })

    if (user) {
        userExists = true;
        res.json({ "Error": "User already Exists" });
    //If new user, then registering to DB
    } else {
        const newUser = new userModel({
            username,
            password
        })
        try{
            const savedUser = await newUser.save()
        }catch(err){
            console.log(err);
        }
        if (savedUser) {
            res.status(200).json({ "result": "success; user created" });
        }
    }



})


module.exports = router;
