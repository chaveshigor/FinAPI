const express = require("express")

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({hello: "world"})
})

const port = 3333

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})