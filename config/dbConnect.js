require("dotenv").config();

const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
  console.log('Database conected!!!')
  return mongoose.connect('mongodb+srv://dinesh103:dinesh103DINESH103@cluster0.3pvw9hk.mongodb.net/Bank?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;