import React,{ Fragment} from 'react';
import { revisarPresupuesto } from '../helpers'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.protoType = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;