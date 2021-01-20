import React from 'react'
import PropTypes from 'prop-types'
import RiepilogoForm from "./RiepilogoForm/RiepilogoFormContainer";
import RiepilogoTable from "./RiepilogoTable/RiepilogoTableContainer";
import CambioFrazionamento from "./cambioFrazionamento/cambioFrazionamentoContainer";
import "./Riepilogo.scss";

const Riepilogo = props => {
    return (
        <div className="riepilogo-container">   
            <div className="riepilogo-text">Riepilogo</div>
            <RiepilogoForm/>
            {/* <div className="line"></div> */}
            <RiepilogoTable/>
            {/* <div className="line"></div> */}
            <CambioFrazionamento/>
        </div>
    )
}

Riepilogo.propTypes = {

}

export default Riepilogo
