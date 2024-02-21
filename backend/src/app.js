const { PORT } = require("./utils/config.js")
const express = require("express")
const app = express()
require("./utils/mongoose.config")
const cors = require("cors")
const bodyParser = require("body-parser")

const { requestLogger } = require("./middlewares/requestLogger")
const { unknownEndpoint } = require("./middlewares/unknownEndpoint.js")
const { errorHandler } = require("./middlewares/errorHandler.js")

const deviceRoutes = require("./routes/device.routes")
const maintenanceRoutes = require("./routes/maintenance.routes")

app.disable("x-powered-by")

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(requestLogger)

app.use("/api/devices", deviceRoutes)
app.use("/api/maintenances", maintenanceRoutes)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
