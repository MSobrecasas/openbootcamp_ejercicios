import React, { useState } from "react";
import { Contacto } from "../../models/Contacto.class";
import ContactoComponent from "../pure/ContactoComponent";

const ContactoListComponent = () => {
  const [estado, setEstado] = useState(false);  
  const defaultContacto = new Contacto(
    "John",
    "Doe",
    "jhondoe@mail.com",
    estado
  );
  let cambiarEstado = () =>{
    setEstado(!estado);
  }
  return (
    <div>
      <div>
        <h1>Contacto:</h1>
      </div>
      <ContactoComponent contacto={defaultContacto}></ContactoComponent>
    <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
};

export default ContactoListComponent;
