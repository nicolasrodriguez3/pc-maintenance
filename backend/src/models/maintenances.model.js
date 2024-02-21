const mongoose = require("mongoose")
const Schema = mongoose.Schema

const maintenanceSchema = new Schema(
	{
		device_id: { type: Schema.Types.ObjectId, ref: "Device", required: true },
		date: { type: Date, required: true },
		detail: { type: String, required: true },
		observation: { type: String },
	},
	{
		timestamps: true,
	}
)

maintenanceSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id
	},
})
const Maintenance = mongoose.model("Maintenance", maintenanceSchema)

module.exports = Maintenance
