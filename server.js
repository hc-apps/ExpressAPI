const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:3000"]
}

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.send('Hello from server!');
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})