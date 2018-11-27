const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
        message:'Its works for get request'
    });
});

router.post('/',(req,res,next)=>{

    const product = {
        name: req.body.name,
        price:req.body.price
    };

    res.status(201).json({
        message:'Its works for post request',
        createdProduct:product
    });
});

router.get('/:productId',(req,res,next)=>{

    const id = req.param.productId;

    res.status(200).json({
        message:'fetching data by id',
        Id:id
    });
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Updated product by ID'
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Product deleted'
    });
});

module.exports = router;