import { useState } from "react"

export default function AddServiceForm() {
	const [form, setForm] = useState({})
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(form)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-2">
			<input
				type="date"
				name=""
				id=""
			/>
			<input
				type="text"
				name="detail"
				placeholder="Detalle"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="observation"
				placeholder="Observaciones"
				onChange={handleChange}
			/>
			<button>Agregar mantenimiento</button>
		</form>
	)
}
