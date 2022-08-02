import logo from './logo.svg';
import './App.css';
import {NuevoComponente} from './Componentes/NuevoComponente'
import { useState } from 'react';
import { render } from '@testing-library/react';

const App = () => {

  const[interruptor, setInterruptor] = useState({
    position: 'on',
    colorSem: 'green'
  });

  const presionaBoton = () => {
    alert('Presione el botón!!!');
  }


  const cambiaBoton = () => {
    
    console.log('ingreso position: ' + interruptor.position + ' colorSem: ' + interruptor.colorSem);
    
    if(interruptor.position=='on'){

      interruptor.position = 'off';
      interruptor.colorSem='red';
      
    }
    else{

      interruptor.position='on';
      interruptor.colorSem='green';
     
    }
    console.log('salida position: ' + interruptor.position + ' colorSem: ' + interruptor.colorSem);
  }

  return (    
    <div className="App">
      {/*<p children={'Este es un hijo'}></p>
      <h1>Poner Todo Junto</h1>
      <button onClick={presionaBoton}>Presioname</button>*/}
      <button onClick={cambiaBoton}>apagar</button>
      <div className='semaforo'>
        <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
        <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
        <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
      </div>       
      {/*<NuevoComponente header={"Header Props"}></NuevoComponente>*/}
    </div>
  );
}

export default App;
