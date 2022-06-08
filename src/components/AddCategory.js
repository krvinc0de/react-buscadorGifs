import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [entrada, setEntrada] = useState('')
    
    const cambio = (evento) => {
        //esta funcion permite ver lo que se escibe en tiempo real
        // console.log(evento.target.value);
        setEntrada(evento.target.value);
    }

    const enviar = (evento) => {
        //esta funcion se encarga de comunicarse con el componente GiftExpertApp y enviarle datos
        //prevent defaul evita que se recargue la pagina
        evento.preventDefault();
        // console.log('envio hecho');
        //if que valida que debe ser mayor a dos letras para insertarse y elimina espacios
        if (entrada.trim().length > 2) {
            //inserta los valores
            setCategories(cats => [entrada, ...cats])
            //cada que se inserta algo, establece el valor del input en string vacio
            setEntrada('')
        }
    }

    return(
        <form onSubmit={ enviar }>
            <label>Esciba aqui</label>
            <input 
                type="text"
                value={entrada}
                onChange={ cambio }
            />
            <p>{entrada}</p>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


export default AddCategory;