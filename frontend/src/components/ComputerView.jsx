import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import AddServiceForm from "./AddServiceForm"

export default function ComputerView() {
	console.log(useParams())
	const id = parseInt(useParams().id)
	const { sucursal } = useParams()

	const [pc, setPc] = useState([])
	const [nroSucursal, setNroSucursal] = useState(1)

	useEffect(() => {
		fetch("/data/sucursales.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				const nroSucursal = data.find(
					(suc) => suc.nombre.toLowerCase() === sucursal.toLowerCase()
				).nroSucursal
				if (!nroSucursal) {
					console.error("Error sucursal")
				}
				setNroSucursal(nroSucursal)
			})

		fetch("/data/data.json")
			.then((res) => res.json())
			.then((data) => {
				setPc(data[nroSucursal - 1].equipos.find((pc) => pc.id === id))
				console.log(pc)
			})
	}, [id])

	return pc?.length !== 0 ? (
		<div className="computer-view">
			<Link to={"/"}>Volver</Link>
			<div className="pc-nombre">{pc?.nombre || `No existe el equipo con id ${id}`}</div>
			<div className="add-service">
				<AddServiceForm />
			</div>
			<div className="services">
				<h4>Mantenimientos realizados</h4>
				<div>
					{pc?.services.map((service) => {
						return (
							<div key={service.id}>
								{service.fecha} - {service.descripcion}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	) : (
		<div>Cargando</div>
	)
}
