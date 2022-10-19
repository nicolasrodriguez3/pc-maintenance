import { useState } from "react"
import "./App.css"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<div className="App">
			<h1>Mantenimiento de PCs</h1>
			<table>
				<tr>
					<th>Nombre</th>
					<th>Usuario</th>
					<th>IP</th>
					<th>CPU</th>
					<th>Memoria</th>
					<th>Disco</th>
					<th>UPS</th>
					<th>Mantenimiento</th>
				</tr>
				<tr>
					<td>MG01-SI242</td>
					<td>Nico</td>
					<td>192.168.10.242</td>
					<td>Intel Core i5</td>
					<td>8gb DDR3</td>
					<td>240gb SSD</td>
					<td>1 Bateria</td>
					<td>01/01/2022</td>
				</tr>
				<tr>
					<td>MG02-SI152</td>
					<td>Nico</td>
					<td>192.168.20.242</td>
					<td>AMD APU6</td>
					<td>4gb DDR3</td>
					<td>120gb SSD</td>
					<td>2 Bateria</td>
					<td>02/04/2021</td>
				</tr>
			</table>
				<button onClick={() => setIsModalOpen(!isModalOpen)}>Agregar PC</button>
        {isModalOpen && (<form>
        <div className="row">
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" name="name" placeholder="MG01-PL151" />
				</div>
				<div className="row">
					<label htmlFor="user">Usuario</label>
					<input type="text" id="user" name="user" placeholder="Nico R" />
				</div>
				<div className="row">
					<label htmlFor="ip1">IP</label>
					<input type="number" id="ip1" name="ip1" placeholder="192" max="255" />.
					<input type="number" id="ip2" name="ip2" placeholder="168" max="255" />.
					<input type="number" id="ip3" name="ip3" placeholder="10" max="255" />.
					<input type="number" id="ip4" name="ip4" placeholder="151" max="255" />
				</div>
				<div className="row">
					<label htmlFor="name">CPU</label>
					<input type="text" id="cpu" name="cpu" placeholder="Intel Core i5" />
				</div>
				<div className="row">
					<label htmlFor="name">RAM</label>
					<input type="number" id="ram" name="ram" placeholder="2" />
					Gb
					<select name="ram-type" id="ram-type">
						<option value="ddr">DDR</option>
						<option value="ddr2">DDR2</option>
						<option value="ddr3">DDR3</option>
						<option value="ddr4">DDR4</option>
					</select>
				</div>
				<div className="row">
					<label htmlFor="name">Disco</label>
					<input type="number" id="disc" name="disc" placeholder="120" />
					<input type="checkbox" name="is-ssd" id="is-ssd" />
					<label htmlFor="is-ssd">SSD</label>
				</div>
				<div className="row">
					<label htmlFor="has-ups">Tiene UPS?</label>
					<input type="checkbox" name="has-ups" id="has-ups" />
					<span>Número de baterias</span>
					<div>
						<label htmlFor="bateries">1</label>
						<input type="radio" name="bateries" id="bateries" value={1} />
						<label htmlFor="bateries2">2</label>
						<input type="radio" name="bateries" id="bateries2" value={2} />
						<label htmlFor="bateries3">3</label>
						<input type="radio" name="bateries" id="bateries3" value={3} />
					</div>
				</div>
				<div className="row">
					<label htmlFor="name">Mantenimiento</label>
					<input type="date" id="service" name="service" />
				</div>
        <button type="submit">Agregar</button>
			</form>)
       }
		</div>
	)
}

export default App

