const Device = require("../models/device.model")
const Maintenance = require("../models/maintenances.model")

const getAllMaintenances = async (req, res, next) => {
	try {
		const maintenances = await Maintenance.find({})
		return res.json(maintenances)
	} catch (err) {
		next(err)
	}
}

const addMaintenance = async (req, res, next) => {
	const { date, detail, observation } = req.body
	const { deviceId } = req.params

	try {
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
	} catch (err) {
		next(err)
	}
}

const deleteMaintenance = async (req, res, next) => {
	const { id } = req.params

	try {
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
	} catch (err) {
		next(err)
	}
}

module.exports = { getAllMaintenances, addMaintenance, deleteMaintenance }
