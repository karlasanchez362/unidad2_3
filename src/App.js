import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import TarjetaDePerfil from './components/TarjetaDePerfil'; 
import ListaDeHabilidades from './components/ListaDeHabilidades';
import { useState } from 'react'; 

function App() {
  const usuario = {
    nombre: 'Karla Sanchez',
    edad: '24 años',
    profesion: 'Estudiante de la tecnicatura de Analisis de Sistemas',
    ciudad: 'Salta, Argentina'
  };

  const habilidades = ['JavaScript', 'React', 'Node.js' , 'HTML', 'CSS'];

  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const cambiarMostrarHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };
  return (
    <div className="App">
      <Titulo />
      <TarjetaDePerfil nombre={usuario.nombre} 
      edad={usuario.edad} 
      profesion={usuario.profesion} 
      ciudad={usuario.ciudad} 
      />
      <button onClick={cambiarMostrarHabilidades} style={{ margin: '20px', padding: '10px 20px', fontSize: '16px' }}>
        {mostrarHabilidades ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>
      {mostrarHabilidades && <ListaDeHabilidades habilidades={habilidades} />}

    </div>
  );
}

export default App;
