import { useState } from "react"

export default function AddServiceForm() {
	const [formData, setFormData] = useState({})
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
			<button>Agregar mantenimiento</button>
		</form>
	)
}
