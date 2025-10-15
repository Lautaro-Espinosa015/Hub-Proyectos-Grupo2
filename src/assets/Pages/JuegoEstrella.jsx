import React from "react";
import useGame from "../Dependence/useGame-estrella.jsx";
import Star from "../Dependence/Estrellas.jsx";
import HUB from "../Dependence/HUB.jsx";
import Controls from "../Dependence/Controls.jsx";

export default function JuegoEstrella() {
  const {
    puntaje,
    posicionEstrella,
    visible,
    juegoActivo,
    mensaje,
    agarrarEstrella,
    reiniciarJuego,
  } = useGame();

  const contenedorStyle = {
    position: 'relative',
    minHeight: '60vh',
    borderRadius: 8,
    padding: 20,
    background: 'linear-gradient(180deg,#071226 0%, #0b2540 100%)',
    color: 'white',
    overflow: 'hidden',
  };

  const tituloStyle = { margin: 0, marginBottom: 12, fontSize: 24 };

  return (
    <div style={contenedorStyle}>
      <h1 style={tituloStyle}>🎮 Atrapa las estrellas</h1>
      <HUB puntaje={puntaje} mensaje={mensaje} />

      {/* El área del juego debe ser position:relative (ya lo tiene) para que la estrella se posicione con % */}
      {visible && juegoActivo && (
        <Star posicion={posicionEstrella} onClick={agarrarEstrella} />
      )}

      <Controls onReiniciar={reiniciarJuego} juegoActivo={juegoActivo} />
    </div>
  );
}
