import logo from './logo.svg';
import './App.css';
import {NuevoComponente} from './Componentes/NuevoComponente'

const App = () => {
  return (
    <div className="App">
      <p children={'Este es un hijo'}></p>
      <h1>Poner Todo Junto</h1>
      <NuevoComponente header={"Header Props"}></NuevoComponente>
    </div>
  );
}

export default App;
