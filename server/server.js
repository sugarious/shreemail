const express = require("express")
const bparser = require("body-parser")
const os = require("os")

const app = express()

app.use(bparser.json())

app.get("/ping", (req, res) => {
    res.json({
        message: "PONG - Reached Mail Server Successfully!",
        hostname: os.hostname() 
    })
})

app.listen(3000, ()=> {
    console.log(`Started shree mail server at 3000`)
})