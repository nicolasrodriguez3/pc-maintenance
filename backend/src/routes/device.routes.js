import { Router } from "express"
import {
	addNewDevice,
	getAllDevices,
	getDeviceByID,
	deleteDevice,
	updateDevice,
} from "../controllers/device.controller.js"
const router = Router()

router.get("/", getAllDevices)
router.get("/:id", getDeviceByID)
router.post("/", addNewDevice)
router.post("/:id", updateDevice)
router.delete("/:id", deleteDevice)

export default router
