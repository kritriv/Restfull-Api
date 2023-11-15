const express = require("express");
const app = express();
const product_routes = require("./routes/products")

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

// middleware or set the routes
app.use("/api/products", product_routes);

const start = async () => {
    try{
        app.listen(PORT, () =>{
            console.log(`${PORT}, Yes I am connect`);
        })
    }
    catch(e){
        console.log(e);
    }
}

start()