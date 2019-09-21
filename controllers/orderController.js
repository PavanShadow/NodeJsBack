const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Order } = require('../models/order');


router.get('/', (req, res) => {
    Order.find((err,docs) => {
        if(!err)
            res.send(docs);
        else
            console.log('Error in retriveing Orders');
    }).sort({date:-1});
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findById(req.params.id, (err,doc) => {
        if(!err)
            res.send(doc);
        else  
            console.log('Error in retriving Orders');
    })
});

router.post('/', (req, res) => {
    
    var order = new Order({
        
        tnumber:req.body.tnumber,
        mobileNo:req.body.mobileNo,
        date:req.body.date,
        items:req.body.items
        
    });
    order.save((err, doc) => {
        
        if(!err)
             res.send(doc);     
        else
            console.log('Error in Order save');
    });
    // nexmo.message.sendsms(from,tnumber,items);
});




module.exports = router;