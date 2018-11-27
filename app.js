const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect('mongodb://shaikhalamin:'+process.env.MONGO_PASSWORD+'@cluster0-shard-00-00-ejzdu.mongodb.net:27017,cluster0-shard-00-01-ejzdu.mongodb.net:27017,cluster0-shard-00-02-ejzdu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{ useNewUrlParser: true });
const productRoutes = require('./api/routes/products');
const orderRoutes   = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,Content-Type,Authorization,X-Requested-With,Content-Type,Accept');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});


app.use('/products',productRoutes);
app.use('/orders',orderRoutes);


app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});


module.exports = app;