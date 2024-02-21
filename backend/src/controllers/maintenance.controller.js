const Device = require("../models/device.model")
const Maintenance = require("../models/maintenances.model")

const getAllMaintenances = async (req, res) => {
	const maintenances = await Maintenance.find({})

	return res.json(maintenances)
}

const addMaintenance = async (req, res) => {
	const { date, detail, observation } = req.body
	const { deviceId } = req.params

	const newMaintenance = await Maintenance.create({
		device_id: deviceId,
		date,
		detail,
		observation,
	})

	// update maintenances array in Device model
	const device = await Device.findById(deviceId)
	device.maintenances.push(newMaintenance)
	await device.save()

	return res.status(201).json(newMaintenance)
}

const deleteMaintenance = async (req, res) => {
	const { id } = req.params

	const maintenanceToDelete = await Maintenance.findById(id)
	if (!maintenanceToDelete)
		return res.status(404).json({ ok: false, error: `No se encontró registro con el id ${id}` })

	const device = await Device.findById(maintenanceToDelete.device_id)
	device.maintenances = device.maintenances.filter(
		(maintenanceId) => maintenanceId.toString() !== id
	)
	await device.save()

	await Maintenance.findByIdAndDelete(id)

	return res.status(204).json({ ok: true })
}

module.exports = { getAllMaintenances, addMaintenance, deleteMaintenance }
