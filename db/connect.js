const { ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");

const uri = "mongodb+srv://vishh:vishh@ME22@vishh.ucrbuqt.mongodb.net/vishh?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("its works");
    return mongoose.connect(uri, { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));
}

module.exports = connectDB;