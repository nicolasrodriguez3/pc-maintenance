const express = require("express")
require("./utils/mongoose.config")
// const bodyParser = require("body-parser")
// const cors = require("cors")
const { requestLogger } = require("./middlewares/requestLogger")

const deviceRoutes = require("./routes/device.routes")

const app = express()

// Middlewares
// app.use(cors())
// app.use(bodyParser.json())
app.use(express.json())
app.use(requestLogger)

app.get("/", (req, res) => res.send("Hola"))
app.get("/api/devices", deviceRoutes)
