import React from 'react';
import './App.css';
import Entrada from './Componentes/Entrada';
import Letra from './Componentes/Letra';
import ValidationComponent from './Componentes/ValidationComponent';
import CharComponent from './Componentes/CharComponent';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Entrada: "",
      Longitud: 0,
      Letras: []
    }
  }

  nuevaletra = (event) => {
    //console.log(event.target);
    let palabra = event.target.value;
    let letras = palabra.split("");
    this.setState({
      Entrada: palabra,
      Longitud: palabra.length,
      Letras: [...letras]
    });
  }

  deletechar = (indice) => {
    const letras = [...this.state.Letras];
    letras.splice(indice, 1);
    const word = [...letras].toString();
    const res = word.replace(/,/g,'');
    console.log(res);
    this.setState({
      //Entrada: palabra,
      //Longitud: palabra.length,
      Letras: [...letras],
      Entrada: res
    });
  }

  cambiacadena = (event, id) => {
    const lind = this.state.Letras.findIndex(p => {
      return p.id === id;
    });

    const character = {
      ...this.state.Letras[lind]
    };

    character = event.target.value;

    const Letras = [...this.state.Letras];
    Letras[lind] = character;

    this.setState( {Letras: Letras} );
  }

  render() {

    let Letras = null;

    Letras = (
      <div>
        {this.state.Letras.map((letra, index) => {
          return <CharComponent
            click={() => this.deletechar(index)}
            valor = {letra}
            key={index}
            //cambioletra={(event) => this.cambiacadena(event, letra.id)}
             />
            }
            )}

      </div>
    );

    return (
      <div>
        <Entrada cambiando={this.nuevaletra} in={this.state} />
        <ValidationComponent long={this.state.Longitud} />
        {Letras}
      </div>

    );


  }
}

export default App;
