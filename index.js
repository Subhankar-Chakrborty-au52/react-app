const express = require("express")

const app = express()

app.get("/check", (req, res) => {
    res.send("Health check ok")
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
