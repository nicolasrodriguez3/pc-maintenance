const Device = require("../models/device.model")

const getAllDevices = async (req, res) => {
	//const devices = await Device.find({})

	//res.json(devices)
	res.send("hola")
}

const getDeviceByID = async (req, res) => {
	const { id } = req.params

	const device = Device.findById(id)

	res.json(device)
}

const addNewDevice = async (req, res) => {
	const {
		name,
		branch,
		cpu,
		ramType,
		ramCapacity,
		diskType,
		diskCapacity,
		hasUps,
		upsVa,
		batteries,
		lastChange,
	} = req.body

	const device = await Device.create({
		name,
		branch,
		cpu,
		ramType,
		ramCapacity,
		diskType,
		diskCapacity,
		hasUps,
		upsVa,
		batteries,
		lastChange,
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
