const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World")
})


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