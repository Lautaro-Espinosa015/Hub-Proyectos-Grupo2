import { useState } from 'react';

const ejercicios = [
  { nombre: 'Ejercicio 1', ruta: '/Proyecto02/Ejercicio1/ejercicio1.html' },
  { nombre: 'Ejercicio 2', ruta: '/Proyecto02/Ejercicio2/ejercicio2.html' },
  { nombre: 'Ejercicio 3', ruta: '/Proyecto02/Ejercicio3/ejercicio3.html' },
  { nombre: 'Ejercicio 4', ruta: '/Proyecto02/Ejercicio4/ejercicio4.html' },
  { nombre: 'Ejercicio 5', ruta: '/Proyecto02/Ejercicio5/ejercicio5.html' },
];

export default function Proyecto2() {
  const [activo, setActivo] = useState(ejercicios[0].ruta);

  return (
    <div>
      <h2>Proyecto02 - Ejercicios</h2>
      <div style={{ display: 'flex', borderBottom: '2px solid #ccc' }}>
        {ejercicios.map((ej, idx) => (
          <button
            key={idx}
            onClick={() => setActivo(ej.ruta)}
            style={{
              flex: 1,
              padding: '10px',
              background: activo === ej.ruta ? '#ddd' : '#f0f0f0',
              border: 'none',
              borderRight: '1px solid #ccc',
              fontWeight: activo === ej.ruta ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {ej.nombre}
          </button>
        ))}
      </div>
      <iframe
        src={activo}
        style={{ width: '100%', height: '500px', border: 'none', marginTop: '10px' }}
        title="Ejercicio Viewer"
      />
    </div>
  );
}
