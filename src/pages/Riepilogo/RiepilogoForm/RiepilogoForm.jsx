import React from 'react'
import PropTypes from 'prop-types'
import Label from "../../../component/Inputs/label";
import Input from "../../../component/Inputs/inputs";
import "../RiepilogoForm/RiepilogoForm.scss";
const RiepilogoForm = props => {
    return (
        <div className="riepilogoform-main" >
            <div className="left-riepilogoform" >
                <div className="sub-input-field">
                    <Label label='Prodotto*'/>
                    <Input  placeholder="Prodotto"/>
                </div>
                <div className="input-field" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div className="sub-input-field">
                        <Label label='Data Decorrenza*'/>
                        <Input type='date' placeholder="Data Decorrenza*"/>
                    </div>
                    <div className="sub-input-field">
                        <Label label='Data Scadenza Polizza*'/>
                        <Input type='date' placeholder="Data Scadenza Polizza*"/>
                    </div>
                </div>
            </div>
            <div className="right-riepilogoform">
                <div className="sub-input-field" >
                    <Label label='Contraente*'/>
                    <Input placeholder="Contraente*"/>
                </div>
                <div className="sub-input-field" >
                    <Label label='Frazionamento*'/>
                    <Input placeholder="Frazionamento*"/>
                </div>
            </div>
        </div>
    )
}

RiepilogoForm.propTypes = {

}

export default RiepilogoForm
