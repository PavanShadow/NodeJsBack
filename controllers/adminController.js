const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Admin } = require('../models/admin');

router.get('/', (req, res) => {
    Admin.find((err,docs) => {
        if(!err)
            res.send(docs);
        else
            console.log('Error in retriveing admins');
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Admin.findById(req.params.id, (err,doc) => {
        if(!err)
            res.send(doc);
        else  
            console.log('Error in retriving admins');
    })
});


module.exports = router;