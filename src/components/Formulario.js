import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError] = useState(false); 


    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1  || isNaN (cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear el form
        guardarNombre('');
        guardarCantidad(0);

    }

    return (  

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/> : null }


            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre} 
                    onChange={ e => guardarNombre(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad} 
                    onChange={ e => guardarCantidad(parseInt(e.target.value,10) )}
                />
            </div>

             <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}
 
Formulario.protoType = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;