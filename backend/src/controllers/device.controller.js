const Device = require("../models/device.model")

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
	console.log(req)

	console.log({
		name,
		branch,
		ip,
		hardware,
	})
	const { cpu, ram, disk, ups } = hardware

	const device = await Device.create({
		name,
		branch,
		ip,
		cpu,
		ram,
		disk,
		ups,
	})

	return res.status(201).json(device)
}

const updateDevice = async (req, res) => {}
const deleteDevice = async (req, res) => {
	const { id } = req.params

	const deviceToDelete = await Device.findById(id)

	if (!deviceToDelete) {
		return res.status("404").json({ error: "No se encontró el dispositivo con id: " + id })
	}
}

module.exports = { addNewDevice, getAllDevices, getDeviceByID, deleteDevice, updateDevice }
