const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected Successfully!!");
}).catch((e) => {
    console.log(e);
});