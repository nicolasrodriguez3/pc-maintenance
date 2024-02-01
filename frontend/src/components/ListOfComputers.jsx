import { useState, useEffect } from "react"
import Sucursal from "./Sucursal"

export default function ListOfComputers() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch("data/data.json")
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [])

	return (
		<>
			<h2>PCs MGottig💻</h2>
			{data.map((sucursales) => {
				return (
					<div key={sucursales.id}>
						<p>Sucursal {sucursales.sucursal}</p>
						<Sucursal
							equipos={sucursales.equipos}
							sucursal={sucursales.sucursal}
							key={sucursales.id}
						/>
					</div>
				)
			})}
		</>
	)
}
