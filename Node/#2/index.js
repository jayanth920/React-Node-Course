const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.get("/", (req,res) => {
    res.send("HELLO PAGE")
})

app.listen( 3000 , () =>{
    console.log("APP RUNNING")
})
