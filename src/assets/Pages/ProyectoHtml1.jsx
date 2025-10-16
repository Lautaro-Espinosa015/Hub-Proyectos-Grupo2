import React, { useState } from "react";
import CussiTech, { Desafio } from "../components/CussiTech";

// Lista de páginas: aquí guardamos la referencia al componente, no una ruta de fichero
const paginas = [
  { nombre: "CussiTech", component: CussiTech },
  { nombre: "Desafio", component: Desafio },
  // puedes agregar más: { nombre: 'Otra', component: OtraComponente }
];

export default function ProyectoHtml1() {
  const [activoIdx, setActivoIdx] = useState(0);

  const ActiveComponent = paginas[activoIdx].component;

  return (
    <div className="proyectohtml-container" style={{ padding: 20 }}>
      <h2>ProyectoHTML - Páginas</h2>

      <div className="paginas-nav" style={{ margin: "12px 0", display: "flex", gap: 8 }}>
        {paginas.map((pg, idx) => (
          <button
            key={idx}
            onClick={() => setActivoIdx(idx)}
            className={`paginas-tab ${activoIdx === idx ? "active" : ""}`}
            style={{
              padding: "6px 12px",
              cursor: "pointer",
              border: activoIdx === idx ? "2px solid #0d6efd" : "1px solid #ccc",
              background: activoIdx === idx ? "#e7f1ff" : "#fff",
            }}
          >
            {pg.nombre}
          </button>
        ))}
      </div>

      <div className="page-wrapper" style={{ marginTop: 16 }}>
        {/* Renderizamos directamente el componente seleccionado */}
        <ActiveComponent />
      </div>
    </div>
  );
}
