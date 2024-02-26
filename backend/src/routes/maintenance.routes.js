import { Router } from "express"
const router = Router()

import {
	getAllMaintenances,
	addMaintenance,
	deleteMaintenance,
	updateMaintenance,
	getMaintenanceByDeviceId,
} from "../controllers/maintenance.controller.js"

router.get("/", getAllMaintenances)
router.get("/:deviceId", getMaintenanceByDeviceId)

// add maintenance
router.post("/:deviceId", addMaintenance)

// update maintenance
router.put("/:maintenanceId", updateMaintenance)

// delete maintenance
router.delete("/:maintenanceId", deleteMaintenance)

export default router
