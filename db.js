const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pavanSE:pavanse@project-database-o2ixb.mongodb.net/designproject?retryWrites=true&w=majority', 
{   
    useNewUrlParser:true,
    useCreateIndex:true
}

);

mongoose.Promise = global.Promise;
module.exports = mongoose;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://pavanSE:pavanse@project-database-o2ixb.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("DesignProject3rd").collection("products");
//   // perform actions on the collection object
//   if(!err)
//         console.log('mongodb connection succeeded..............');
//     else
//         console.log('Error in DB.');
        
//   client.close();
// });
