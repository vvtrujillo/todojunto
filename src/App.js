import logo from './logo.svg';
import './App.css';
import {NuevoComponente} from './Componentes/NuevoComponente'
import { useState } from 'react';
import { render } from '@testing-library/react';
import {Form, input} from 'reactstrap'
import { FormGroup, Input, Row, Col } from 'reactstrap';

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

      setInterruptor({position:'off',colorSem:'red'});      
      
    }
    else{

      setInterruptor({position:'on',colorSem:'green'});      
     
    }
    console.log('salida position: ' + interruptor.position + ' colorSem: ' + interruptor.colorSem);
  }

  return (    

    <div>      
      <Form className='form'>
        <div className='col-md-6 container'>
          <Row>
            <Col md={6}>
              <label>Nombre: </label>          
              <Input type='text' placeholder='ingresa nombre...'></Input>        
            </Col>            
            <Col md={6}>
              <label>Apellido: </label>          
              <Input type='text' placeholder='ingresa apellido...'></Input>
            </Col>            
          </Row>
          <Row>
            <label>Dirección: </label>
            <Input type='text' placeholder='ingresa dirección...'></Input>        
          </Row>
        </div>        
      </Form>      
      <div className="App">
        {/*<p children={'Este es un hijo'}></p>
        <h1>Poner Todo Junto</h1>
        <button onClick={presionaBoton}>Presioname</button>*/}
        <button onClick={cambiaBoton} className='btn btn-primary'>{interruptor.position}</button>
        <div className='semaforo'>
          <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
          <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
          <div className='circulo-semaforo' style={{backgroundColor: interruptor.colorSem}}></div>
        </div>       
        {/*<NuevoComponente header={"Header Props"}></NuevoComponente>*/}
      </div>
    </div>    
  );
}

export default App;
