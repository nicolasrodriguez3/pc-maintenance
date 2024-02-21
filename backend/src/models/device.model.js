const mongoose = require("mongoose")
const Schema = mongoose.Schema

const deviceSchema = new Schema(
	{
		name: { type: String, required: true },
		ip: { type: String, required: true },
		branch: { type: String, required: true },
		hardware: {
			cpu: { type: String },
			ram: {
				type: { type: String },
				capacity: { type: Number },
			},
			disk: {
				type: { type: String },
				capacity: { type: Number },
			},
			ups: {
				has_ups: { type: Boolean },
				brand: { type: String },
				va: { type: Number },
				batteries: {
					quantity: { type: Number },
					last_change: { type: Date },
				},
			},
		},
		maintenances: [
			{
				type: Schema.Types.ObjectId,
				ref: "Maintenance",
			},
		],
	},
	{
		timestamps: true,
	}
)

deviceSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id
	},
})

const Device = mongoose.model("Device", deviceSchema)

module.exports = Device
