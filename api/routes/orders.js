const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
        message:'Its works for get request'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Its works for post request'
    });
});

router.get('/:orderId',(req,res,next)=>{

    const id = req.param.orderId;

    res.status(200).json({
        message:'fetching data by id',
        Id:id
    });
});

router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Updated product by ID'
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Product deleted'
    });
});

module.exports = router;