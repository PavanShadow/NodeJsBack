const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
// const {mongoose}  = require('../db.js');
var { Product } = require('../models/product');

var fs = require('fs');
// const Grid = require('gridfs-stream');
// const GridFsStorage = require('multer-gridfs-storage');

// Grid.mongo = mongoose.mongo;
// let gfs;

router.get('/', (req, res) => {
    Product.find((err,docs) => {
        if(!err)
            res.send(docs);
        else
            console.log('Error in retriveing Products');
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findById(req.params.id, (err,doc) => {
        if(!err)
            res.send(doc);
        else  
            console.log('Error in retriving Product');
    })
});

router.post('/', (req, res) => {
    // let imageUp = fs.rename('808445.jpg','lol.jpg');
    
    var pro = new Product({

        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image

    
    });
    
    pro.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
            console.log('Error in Product save');
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var pro = {

        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };
    Product.findByIdAndUpdate(req.params.id, { $set:pro }, { new:true }, (err, doc) => {
        if(!err)
            res.send(doc);
        else 
            console.log('Error in Product update');
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err)
            res.send(doc);
        else 
            console.log('Error in Product delete');
    });
});



module.exports = router;