const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Bhavik-Sejpal:Home@12345@cluster0.s9gix.mongodb.net/nodeDynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection Sucessful");
}).catch((error)=>{
    console.log(error);
})