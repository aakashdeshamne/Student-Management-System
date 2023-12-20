const mongoose = require('mongoose');
const DB = "mongodb+srv://deshmaneakash100:Akash2003@cluster0.win58hk.mongodb.net/Aakash?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
  console.log("Connection started");
}).catch(err => {
  console.log(err.message);
});
