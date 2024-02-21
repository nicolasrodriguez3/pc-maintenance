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
			<AddPcForm />
			<table>
				<th>
					<td>Equipo</td>
					<td>Sucursal</td>
				</th>
				<tbody>
					{data.map((pc) => {
						return (
							<tr key={pc._id}>
								<td>Equipo {pc.name}</td>
								<td>Sucursal {pc.branch}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
