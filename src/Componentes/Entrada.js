import React from 'react';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p> Introduce un texto </p>
                <input type="text" onChange={this.props.cambiando}  value={this.props.in.Entrada}/>
                <p> La longitud del texto es de {this.props.in.Entrada.length} caracteres. </p>
            </div >
        )
    }
};

export default Entrada;