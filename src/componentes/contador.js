import React from "react";
import "../hojas-de-estilo/contador.css";

function contador({ numClics }) {
  return <div className="contador-contenedor">{numClics}</div>;
}

export default contador;
