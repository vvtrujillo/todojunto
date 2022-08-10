import logo from './logo.svg';
import './App.css';
import NuevoComponente from './Componentes/NuevoComponente'
import { useState } from 'react';
import { render } from '@testing-library/react';
import {Form, input} from 'reactstrap'
import { FormGroup, Input, Row, Col, p } from 'reactstrap';

const App = () => {
  
  //var intervaloAmarillo;

  const[interruptor, setInterruptor] = useState({
    position: 'on',
    colorSem: 'green'
  });

  const presionaBoton = () => {
    alert('Presione el botón!!!');
  }

  /*const funcIntervaloAmarillo = () => {

    intervaloAmarillo = setInterval(cambiaColorAmarillo,1000);    
  } */   

  const recorreDivs = () => {

    let arrayDiv = document.getElementsByClassName('circulo-semaforo');  

    Array.from(arrayDiv).forEach(element => {
      element.style.backgroundColor='';
    })    

  }

  const cambiaColorAmarillo = () => {
    setInterruptor({colorSem:'yellow'});
    
    recorreDivs();
    document.getElementById('sem-amarillo').style.backgroundColor = interruptor.colorSem;
    document.getElementById('sem-rojo').style.backgroundColor = '';
    document.getElementById('sem-verde').style.backgroundColor = '';
    console.log('color: ',interruptor.colorSem);
  }

  const cambiarColorVerde = () => {
    setInterruptor({colorSem:'green'});
    document.getElementById('sem-verde').style.backgroundColor = interruptor.colorSem;    
    document.getElementById('sem-rojo').style.backgroundColor = '';
    document.getElementById('sem-amarillo').style.backgroundColor = '';
    console.log('color: ',interruptor.colorSem);
  }
  const cambiaColorRojo = () => {
    setInterruptor({colorSem:'red'});
    document.getElementById('sem-rojo').style.backgroundColor = interruptor.colorSem;    
    document.getElementById('sem-amarillo').style.backgroundColor = '';
    document.getElementById('sem-verde').style.backgroundColor = '';
    console.log('color: ',interruptor.colorSem);
  }


  const cambiaBoton = () => {
    
    console.log('ingreso position: ' + interruptor.position + ' colorSem: ' + interruptor.colorSem);
    
    if(interruptor.position=='on'){      

      setInterruptor({position:'off',colorSem:'red'});      
      
    }
    else{

      setInterruptor({position:'on',colorSem:'green'});      
     
    }
    console.log('salida position: ' + interruptor.position + ' colorSem: ' + interruptor.colorSem);
  }

  return (
    <div>      
      <div className="App">
        {/*<p children={'Este es un hijo'}></p>
        <h1>Poner Todo Junto</h1>
        <button onClick={presionaBoton}>Presioname</button>*/}        
        <button onClick={cambiaColorAmarillo} className='btn btn-warning'>Amarillo</button>
        <button onClick={cambiarColorVerde} className='btn btn-success'>Verde</button>
        <button onClick={cambiaColorRojo} className='btn btn-danger'>Rojo</button>

        <div className='semaforo'>
          <div className='circulo-semaforo' id='sem-rojo'></div>          
          <div className='circulo-semaforo' id='sem-amarillo'></div>
          <div className='circulo-semaforo' id='sem-verde'></div>
        </div>       
        <NuevoComponente cambiaColor={interruptor.colorSem}></NuevoComponente>
      </div>
    </div>    
  );
}

export default App;
