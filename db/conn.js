const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ward-connect';

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully!!");
}).catch((e) => {
    console.log(e);
});