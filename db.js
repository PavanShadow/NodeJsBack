const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pavanSE:pavanse@project-database-o2ixb.mongodb.net/designproject?retryWrites=true&w=majority', 
{   
    useNewUrlParser:true,
    useCreateIndex:true
}

);

mongoose.Promise = global.Promise;
module.exports = mongoose;
