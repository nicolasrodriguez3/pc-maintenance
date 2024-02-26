import { PORT } from "./utils/config.js"
import express from "express"
const app = express()
import "./utils/mongoose.config.js"
import cors from "cors"
import bodyParser from "body-parser"

import { requestLogger } from "./middlewares/requestLogger.js"
import { unknownEndpoint } from "./middlewares/unknownEndpoint.js"
import { errorHandler } from "./middlewares/errorHandler.js"

import deviceRoutes from "./routes/device.routes.js"
import maintenanceRoutes from "./routes/maintenance.routes.js"

app.disable("x-powered-by")

// Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(requestLogger)

app.use("/api/devices", deviceRoutes)
app.use("/api/maintenances", maintenanceRoutes)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
