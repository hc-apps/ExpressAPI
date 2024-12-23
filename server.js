const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors());

app.get("/api", (req, res) => {
    res.send('Hello from server!');
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})