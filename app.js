require("dotenv").config();

const express = require("express");
const app = express();
const product_routes = require("./routes/products")
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

// middleware or set the routes
app.use("/api/products", product_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT}, Yes I am connect`);
        })
    }
    catch(e){
        console.log(e);
    }
}

start()