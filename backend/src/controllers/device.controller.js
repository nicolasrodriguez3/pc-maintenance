import { Device } from "../models/device.model.js"

const getAllDevices = async (req, res) => {
	const devices = await Device.find({})
	res.json(devices)
}

const getDeviceByID = async (req, res, next) => {
	const { id } = req.params

	try {
		const device = await Device.findById(id).populate("maintenances", "detail date observation")
		console.log({ device })
		res.json(device)
	} catch (err) {
		next(err)
	}
}

const addNewDevice = async (req, res) => {
	const { name, branch, ip, hardware } = req.body

	const device = await Device.create({
		name,
		branch,
		ip,
		hardware,
	})

	return res.status(201).json(device)
}

const updateDevice = async (req, res, next) => {
	const { id } = req.params
	if (!id) return res.status(400).json({ error: `Id es requerido` })

	try {
		const deviceToUpdate = await Device.findById(id)
		if (!deviceToUpdate)
			return res.status(404).json({ error: `No se encontró dispositivo con id ${id}` })

		const { name, branch, ip, hardware } = req.body
		const device = await Device.findByIdAndUpdate(
			id,
			{
				name,
				branch,
				ip,
				hardware,
			},
			{
				new: true,
			}
		).populate("maintenances", "detail date observation")

		res.json(device)
	} catch (err) {
		next(err)
	}
}

const deleteDevice = async (req, res) => {
	const { id } = req.params

	const deviceToDelete = await Device.findById(id)

	if (!deviceToDelete) {
		return res.status("404").json({ error: "No se encontró el dispositivo con id: " + id })
	}

	await Device.findByIdAndDelete(id)
	res.status(200).end()
}

export { addNewDevice, getAllDevices, getDeviceByID, deleteDevice, updateDevice }
