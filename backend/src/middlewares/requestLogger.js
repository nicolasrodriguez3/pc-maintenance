export const requestLogger = (request, response, next) => {
	if (process.env.NODE_ENV === "test") {
		return next()
	}
	console.log("Method:", request.method)
	console.log("Path:  ", request.path)

	if (request.body && Object.keys(request.body).length > 0) {
		console.table({
			"Body:": request.body,
		})
	}
	next()
}
