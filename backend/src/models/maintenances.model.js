import { Schema, model } from "mongoose"

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

export const Maintenance = model("Maintenance", maintenanceSchema)
