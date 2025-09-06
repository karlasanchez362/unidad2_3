import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import TarjetaDePerfil from './components/TarjetaDePerfil'; 

const usuario = {
    nombre: 'Karla Sanchez',
    edad: 24,
    profesion: 'Estudiante de Analisis de Sistemas',
    ciudad: 'Salta, Argentina'
  };
function App() {
  
  return (
    <div className="App">
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />
    </div>
  );
}

export default App;
