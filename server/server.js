const express = require('express')
const app = express();
const port = process.env.PORT || 5000
const http = require('http')
const socketIo = require("socket.io")
const axios = require("axios")
const server = http.createServer(app)
const io = socketIo(server)
const getApiAndEmit = 'TODO'

app.use(express.json())
app.use("/api/stock", require("./routes/stock"))

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({express: 'Express is connected'})
})

// server.listen(port, () => console.log(`Listening on port ${port}`));