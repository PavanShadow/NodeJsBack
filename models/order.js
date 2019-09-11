const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    
    tnumber : {type:Number},
    mobileNo : {type:Number},
    date : {type:String},
    items : [{
        id : {type:String},
        name : {type:String},
        quantity : {type:Number}
    }]
    // id : {type:String},
    // quantity : {type:Number}
    
});


module.exports = { Order };