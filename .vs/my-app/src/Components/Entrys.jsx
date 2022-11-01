import React from "react";

function Entrys(){
    state = {
        nombre: "",
        email: "",
      };

    const entrenamiento = ({ name, value}) => {
       
    }

    return (
        <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={event => this.valueToState(event.target)}
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            onChange={event => this.valueToState(event.target)}
          />
          
        </form>
      </div>
    );
}
export default Entrys;