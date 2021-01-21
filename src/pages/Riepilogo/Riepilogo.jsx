import React from 'react'
import RiepilogoForm from "./RiepilogoForm/RiepilogoFormContainer";
import RiepilogoTable from "./RiepilogoTable/RiepilogoTableContainer";
import CambioFrazionamento from "./cambioFrazionamento/cambioFrazionamentoContainer";
import "./Riepilogo.scss";

const Riepilogo = props => {
    return (
        <div className="riepilogo-container">   
            <RiepilogoForm {...props} />
            <RiepilogoTable {...props}/>
            <CambioFrazionamento {...props}/>
        </div>
    )
}

Riepilogo.propTypes = {

}

export default Riepilogo
