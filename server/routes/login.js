const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



const userModel = require('./../models/Users');

/**
 * TODO: []Check if username and password are present(valdiator)
 * TODO: []Search for user in DB
 * TODO: []Use Jwt Here
 */


 /**
 * *user defined functions
 * @username : String
 * @password : String
 * @return: Bool
 */

// *Validator Function
const validator = require('./utilities/validator');

router.post('/',async (req, res) => {
    const {username, password} = req.body;
    if(!validator(username, password)){
        return res.status(400).json({ "Error": "no credentials" });
    }

    const user = await userModel.findOne({username:username});
    if(user){
        if(user.password === password){

            const accessToken = jwt.sign({username : user.username, user_id: user._id},process.env.ACCESS_TOKEN_SECRET);
            res.send({
                "token":accessToken,
                "user": {
                    "username": user.username,
                    "id": user.id
                }
            });
        }
        else{
            res.status(400).json({"Error": "password or email doesn't match"});
        }
    }
    //If user doen't exits
    else{
        return res.status(401).json({"Error": "user needs to register"});
    }


})


module.exports = router;
