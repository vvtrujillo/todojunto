import { Component } from "react";

export class NuevoComponente extends Component{

    render(){
        return(
            <div>                
                <h1 style={{color:'red'}}>
                    {this.props.header}
                </h1>
                {this.props.children}                
            </div>
        );
    }
}