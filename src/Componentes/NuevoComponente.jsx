

const NuevoComponente = ({cambiaColor}) => {

    console.log('nuevo componente: ', cambiaColor)
    
    return(
        <div>                
            <h1 style={{color: cambiaColor}}>color semaforo</h1>
        </div>
    );
    
}

export default NuevoComponente;