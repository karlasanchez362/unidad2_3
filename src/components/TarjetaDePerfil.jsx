import React from 'react'

export default function TarjetaDePerfil({ usuario }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', margin: '10px' , backgroundColor: '#77acb7'}}>
      <h2>{usuario.nombre}</h2>
      <p>Edad: {usuario.edad}</p>
      <p>Profesión: {usuario.profesion}</p>
      <p>Ciudad: {usuario.ciudad}</p>
    </div>
  )
}
