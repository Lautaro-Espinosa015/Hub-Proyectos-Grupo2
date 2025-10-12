import { useState, useEffect, useRef, useCallback } from 'react';

const aleatorioEntre = (min, max) => Math.random() * (max - min) + min;

export default function useGame() {
  const [puntaje, setPuntaje] = useState(0);
  const [posicionEstrella, setPosicionEstrella] = useState({ x: 50, y: 50 });
  const [visible, setVisible] = useState(false);
  const [juegoActivo, setJuegoActivo] = useState(true);
  const [mensaje, setMensaje] = useState('');

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const posicionAlAzar = useCallback(() => {
    const y = aleatorioEntre(10, 90);
    const x = aleatorioEntre(10, 90);
    setPosicionEstrella({ x, y });
  }, []);

  const mostrarEstrella = useCallback(() => {
    posicionAlAzar();
    setVisible(true);

    // limpiar timeout anterior si existe
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 1400);
  }, [posicionAlAzar]);

  useEffect(() => {
    if (!juegoActivo) return;

    intervalRef.current = setInterval(() => {
      mostrarEstrella();
    }, 1800);

    return () => clearInterval(intervalRef.current);
  }, [juegoActivo, mostrarEstrella]);

  const agarrarEstrella = () => {
    setPuntaje((p) => p + 1);
    setVisible(false);
  };

  useEffect(() => {
    if (puntaje >= 10) {
      setJuegoActivo(false);
      setMensaje('🌟 ¡Ganaste! 🌟');
      // limpiar timers
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [puntaje]);

  const reiniciarJuego = () => {
    setPuntaje(0);
    setMensaje('');
    setJuegoActivo(true);
    setVisible(false);
  };

  // limpieza final al desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    puntaje,
    posicionEstrella,
    visible,
    juegoActivo,
    mensaje,
    agarrarEstrella,
    reiniciarJuego,
  };
}