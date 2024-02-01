import { Link } from "react-router-dom"

export default function Sucursal({ equipos, sucursal }) {
	return (
		<div className="sucursal">
			<div>
				{equipos.map((equipo) => {
					return (
						<Link
							key={equipo.id}
							to={`/${sucursal.toLowerCase()}/${equipo.id}`}>
							<div className="equipo-item">{equipo.nombre}</div>
							<div className="equipo-item">{equipo.hardware.cpu}</div>
							<div className="equipo-item">{equipo.services[0]?.descripcion}</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
