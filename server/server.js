const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

app.use(cors());


app.use('/posts', require('./routes/posts'));



PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Running on PORT ${PORT}`));


/**
 * *Connection to mongoose
 */
console.log('Connecting to DB')
try{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log(`Connectecd to DB`));
}catch(err){
    console.log(err);
}