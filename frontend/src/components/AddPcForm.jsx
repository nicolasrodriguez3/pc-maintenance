function AddPcForm() {
	return (
		<form>
			<input
				type="text"
				name="ip"
				placeholder="192.168.10.151"
			/>

			<input
				type="text"
				name="name"
				placeholder="MG01-PL151"
			/>
			<select
				type="text"
				name="branch">
				<option value="1">Crespo</option>
				<option value="2">Ramirez</option>
				<option value="3">Victoria</option>
			</select>
			<section>
				<input
					type="text"
					name="cpu"
					placeholder="Intel Core I5"
				/>
				<select name="ram">
					<option value="ddr1">DDR1</option>
					<option value="ddr2">DDR2</option>
					<option value="ddr3">DDR3</option>
					<option value="ddr4">DDR4</option>
				</select>
				<div>
					<input
						type="number"
						name="ram-capacity"
						placeholder="1"
					/>
					gb
				</div>
				<select name="disk-type">
					<option value="ssd">SSD</option>
					<option value="hdd">HDD</option>
				</select>
				<div>
					<input
						type="number"
						name="disk-capacity"
						placeholder="120"
					/>
					gb
				</div>
			</section>
			<section>
				<p>UPS</p>
				<input
					type="checkbox"
					name="no-ups"
					id=""
				/>{" "}
				No tiene UPS
				<input
					type="checkbox"
					name="no-ups"
					id=""
				/>{" "}
				UPS Compartido
				<label htmlFor="ups-brand">Marca</label>
				<input
					id="ups-brand"
					type="text"
					name="brand"
					placeholder="APC"
				/>
				<label htmlFor="ups-brand">VA</label>
				<input
					id="ups-va"
					type="number"
					name="va"
					placeholder="500"
				/>
				<label htmlFor="ups-batteries">Cantidad de baterías</label>
				<input
					id="ups-batteries"
					type="number"
					name="ups-batteries"
					placeholder="2"
				/>
				<label htmlFor="ups-batteries-last-change">Fecha de último cambio</label>
				<input
					id="ups-batteries-last-change"
					type="date"
					name="ups-batteries-last-change"
				/>
			</section>

			<button type="submit">Agregar PC</button>
		</form>
	)
}
export default AddPcForm
