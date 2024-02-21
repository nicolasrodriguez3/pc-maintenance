const router = require("express").Router()
const {
	getAllMaintenances,
	addMaintenance,
	deleteMaintenance,
} = require("../controllers/maintenance.controller")

router.get("/", getAllMaintenances)

// add maintenance
router.post("/:deviceId", addMaintenance)

// delete maintenance
router.delete("/:id", deleteMaintenance)

module.exports = router
