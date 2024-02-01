const router = require("express").Router()
const deviceController = require("../controllers/device.controller")

// GET All devices
router.get("/", deviceController.getAllDevices)

module.exports = router
