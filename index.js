const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const cors = require('cors');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const busboyBodyParser = require('busboy-body-parser');

// const Schema = mongoose.Schema;
// var fs = require('fs');

const {mongoose}  = require('./db.js');
var productController = require('./controllers/productController.js');
var orderController = require('./controllers/orderController.js');
var adminController = require('./controllers/adminController.js')

var app = express();
app.use(bodyparser.json());
// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(multer({
//     dest:'./uploads',
//     rename: function(fieldname,filename){
//         return filename;
//     }
// }))
app.use(busboyBodyParser({ limit: '5mb' }));

app.use(cors({origin: 'http://localhost:4200'}));
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started at port : 3000'));

app.use('/products', productController);
app.use('/orders', orderController);
app.use('/admins', adminController);
