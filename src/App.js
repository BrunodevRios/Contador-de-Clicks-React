import "./App.css";
import React from "react";
import Boton from "./componentes/boton.js";
import KermitLogo from "./imagenes/kermit-logo.png";
import Contador from "./componentes/contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  };
  const reiniciarContador = () => {
    setNumClics(0)
  };
  return (
    <div className="App">
      <div className="kermit-logo-contenedor">
        <img className="kermit-logo" src={KermitLogo} alt="Logo de kermit" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
          texto="Aumentar" 
          esBotonClic={true} 
          manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
