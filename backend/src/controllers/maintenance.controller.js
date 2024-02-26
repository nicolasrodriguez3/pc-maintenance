import { Device } from "../models/device.model.js"
import { Maintenance } from "../models/maintenances.model.js"

const getAllMaintenances = async (req, res, next) => {
	try {
		const maintenances = await Maintenance.find({})
		return res.json(maintenances)
	} catch (err) {
		next(err)
	}
}

const getMaintenanceByDeviceId = async (req, res, next) => {
	const { deviceId } = req.params
	console.log({ deviceId })
	try {
		const maintenances = await Maintenance.find({ device_id: deviceId })
		return res.json(maintenances)
	} catch (err) {
		next(err)
	}
}

const addMaintenance = async (req, res, next) => {
	const { date, detail, observation } = req.body
	const { deviceId } = req.params
	if (!deviceId) return res.status(400).json({ error: `Id es requerido` })

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

const updateMaintenance = async (req, res, next) => {
	const { maintenanceId: id } = req.params
	if (!id) return res.status(400).json({ error: `Id es requerido` })

	try {
		const maintenanceToUpdate = await Maintenance.findById(id)
		if (!maintenanceToUpdate)
			return res.status(404).json({ ok: false, error: `No se encontró registro con el id ${id}` })

		const { date, detail, observation } = req.body
		console.log({ date, detail, observation, id })
		const maintenance = await Maintenance.findByIdAndUpdate(
			id,
			{
				date,
				detail,
				observation,
			},
			{ new: true }
		)

		return res.json(maintenance)
	} catch (err) {
		next(err)
	}
}

const deleteMaintenance = async (req, res, next) => {
	const { maintenanceId: id } = req.params
	if (!id) return res.status(400).json({ error: `Id es requerido` })

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

export {
	getAllMaintenances,
	getMaintenanceByDeviceId,
	addMaintenance,
	deleteMaintenance,
	updateMaintenance,
}
