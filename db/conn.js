const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://santhoshprabhu:9QywU2KJMiwgNUma@wardconnect.jyetjxb.mongodb.net/wardconnect?retryWrites=true&w=majority")
.then(() => {
    console.log("MongoDB Connected Successfully!!");
}).catch((e) => {
    console.log(e);
});