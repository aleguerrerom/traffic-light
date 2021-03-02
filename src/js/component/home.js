//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState } from "react";

//create your first component
export function Home() {
	/// funcion para enviar variale de color y funcion con user state vacio
	const [ColorSeleccionado, colorFuncion] = useState("");
	/// variables para quitar seleccion de valores
	const rojoSeleccionado = ColorSeleccionado == "red" ? "selected" : "";
	const amarilloSeleccionado =
		ColorSeleccionado == "yellow" ? "selected" : "";
	const verdeSeleccionado = ColorSeleccionado == "green" ? "selected" : "";
	return (
		<div className="text-center mt-5">
			<div id="cable"></div>
			<div id="semaforo">
				<div
					className={"luz rojo " + rojoSeleccionado}
					onClick={() => colorFuncion("red")}></div>
				<div
					className={"luz amarillo " + amarilloSeleccionado}
					onClick={() => colorFuncion("yellow")}></div>
				<div
					className={"luz verde " + verdeSeleccionado}
					onClick={() => colorFuncion("green")}></div>
			</div>
		</div>
	);
}
