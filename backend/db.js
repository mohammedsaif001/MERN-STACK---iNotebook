const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://saif:saif@cluster0.sy1yr.mongodb.net/mernstack?retryWrites=true&w=majority" //Change password & databaseName

const connectToMongo = ()=>{
    // mongoose.connect(mongoURI, ()=>{
    //     console.log("Connected to Mongo Successfully");
    // })
    mongoose.connect(mongoURI,{
      useNewUrlParser : true,
     useUnifiedTopology:true
    }).then(()=>{
      console.log('Connection Successful');
    }).catch((err) =>console.log(err));
}

module.exports = connectToMongo;