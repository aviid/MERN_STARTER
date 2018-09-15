const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

const app = express();

//middleware
app.use(bodyParser.json());

//config Database
const db = require('./config/keys').mongoURI;

//Connecton to mongoose
mongoose.connect(db,{})
        .then(()=>console.log('MongoDB Connected....'))
        .catch(err=>console.log(err));

//Route setup
const routeItem = require('./route/api/item');
app.use('api/item',routeItem);



const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log('Server Started Successfully.....'));