const mongoose = require("mongoose")
const Schema = mongoose.Schema

const deviceSchema = new Schema({
	name: { type: String, required: true },
	branch: { type: String, required: true },
	hardware: {
		cpu: { type: String, required: false },
		ram: {
			type: { type: String, required: false },
			capacity: { type: String, required: false },
		},
		disk: {
			type: { type: String, required: false },
			capacity: { type: String, required: false },
		},
		ups: {
			has_ups: { type: Boolean, required: false },
			va: { type: String },
			batteries: {
				quantity: { type: Number },
				last_change: { type: Date },
			},
		},
	},
})

const Device = mongoose.model("Device", deviceSchema)

module.exports = Device
