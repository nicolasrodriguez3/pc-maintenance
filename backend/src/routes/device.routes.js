const router = require("express").Router()
const deviceController = require("../controllers/device.controller")

// GET All devices
router.get("/", deviceController.getAllDevices)
router.get("/:id", deviceController.getDeviceByID)
router.post("/", deviceController.addNewDevice)
router.delete("/:id", deviceController.deleteDevice)

module.exports = router
