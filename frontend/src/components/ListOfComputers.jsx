import { useState, useEffect } from "react"
import Sucursal from "./Sucursal"
import AddPcForm from "./AddPcForm"

const API_URL = import.meta.env.VITE_API_URL

export default function ListOfComputers() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(`${API_URL}/api/devices`)
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [])

	return (
		<>
			<h2>PCs MGottig💻</h2>

			<table>
				<thead>
					<tr>
						<th>Equipo</th>
						<th>IP</th>
						<th>Sucursal</th>
					</tr>
				</thead>
				<tbody>
					{data.map((pc) => {
						return (
							<tr key={pc.id}>
								<td className="text-left">Equipo {pc.name}</td>
								<td>{pc.ip}</td>
								<td>Sucursal {pc.branch}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
