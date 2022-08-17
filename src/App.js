
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import FreeCodeCamp_logo from './img/FreeCodeCamp_logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const ManejarClic = () => {
    setNumClics( numClics + 1);
    console.log(' Clic ');
    
  }

  const ReiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
          <img
              className='freecodecamp-logo'
              src={ FreeCodeCamp_logo }
              alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
          <Contador numClics = { numClics } />
          <Boton 
          texto='Clic'
          esBotonDeClic={ true }
          manejarClic={ ManejarClic } />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClic={ ReiniciarContador } />
      </div>
      
    </div>
  );
}

export default App;
