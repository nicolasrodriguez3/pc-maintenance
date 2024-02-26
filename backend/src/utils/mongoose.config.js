import { connect } from "mongoose"
import { MONGODB_URI } from "./config.js"

// Connection URL for MongoDB Atlas
const uri = MONGODB_URI

// Connect to MongoDB Atlas
connect(uri)
	.then(() => console.log("MongoDB connection established"))
	.catch((err) => console.log(err))
