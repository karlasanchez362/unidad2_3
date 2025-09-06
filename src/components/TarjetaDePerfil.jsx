import React from 'react'

export default function TarjetaDePerfil({ usuario }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '20px auto',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backgroundColor: 'linear-gradient(135deg, #f9f9f9, #eaeaea)',
    maxWidth: '300px' , textAlign: 'center'}}>
      <h2>{usuario.nombre}</h2>
      <p>Edad: {usuario.edad}</p>
      <p>Profesión: {usuario.profesion}</p>
      <p>Ciudad: {usuario.ciudad}</p>
    </div>
  )
}
