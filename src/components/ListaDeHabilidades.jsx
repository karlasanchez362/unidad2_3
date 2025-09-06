import React from 'react'

export default function ListaDeHabilidades({ habilidades }) {
  return (habilidades && habilidades.length > 0 ? (
    <div>
      <h3>Lista de Habilidades</h3>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>No hay habilidades disponibles.</p>
  )
  )
}
