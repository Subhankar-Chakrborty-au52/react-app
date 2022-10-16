const express = require("express")

const app = express()

app.get("/check", (req, res) => {
    res.send("Health check ok")
})

app.get("/feature", (req, res) => {
    res.send("Secret message")
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
