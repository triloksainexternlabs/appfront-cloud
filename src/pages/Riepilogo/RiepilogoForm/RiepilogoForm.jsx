import React from 'react';
import Label from "../../../component/Inputs/label";
import Input from "../../../component/Inputs/inputs";
import "../RiepilogoForm/RiepilogoForm.scss";
const RiepilogoForm = props => {
    return (
        <div className="riepilogoform-main" >
            <div className="left-riepilogoform" >
                <div className="sub-input-field">
                    <Label label='Prodotto*'/>
                    <Input  value={props.formik.values.Riepilogo.prodotto} onChange={props.formik.handleChange} inputTextId="Riepilogo.prodotto" inputTextName="Riepilogo.prodotto"  placeholder="Prodotto"/>
                </div>
                <div className="input-field" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div className="sub-input-field">
                        <Label label='Data Decorrenza*'/>
                        <Input value={props.formik.values.Riepilogo.dataDecorrenza} onChange={props.formik.handleChange} inputTextId="Riepilogo.dataDecorrenza" inputTextName="Riepilogo.dataDecorrenza"  type='date' placeholder="Data Decorrenza*"/>
                    </div>
                    <div className="sub-input-field">
                        <Label label='Data Scadenza Polizza*'/>
                        <Input value={props.formik.values.Riepilogo.dataScadenzaPolizza} onChange={props.formik.handleChange} inputTextId="Riepilogo.dataScadenzaPolizza" inputTextName="Riepilogo.dataScadenzaPolizza"  type='date' placeholder="Data Scadenza Polizza*"/>
                    </div>
                </div>
            </div>
            <div className="right-riepilogoform">
                <div className="sub-input-field" >
                    <Label label='Contraente*'/>
                    <Input value={props.formik.values.Riepilogo.contraente} onChange={props.formik.handleChange} inputTextId="Riepilogo.contraente" inputTextName="Riepilogo.contraente"  placeholder="Contraente*"/>
                </div>
                <div className="sub-input-field" >
                    <Label label='Frazionamento*'/>
                    <Input value={props.formik.values.Riepilogo.frazionamento1} onChange={props.formik.handleChange} inputTextId="Riepilogo.frazionamento1" inputTextName="Riepilogo.frazionamento1"  placeholder="Frazionamento*"/>
                </div>
            </div>
        </div>
    )
}

RiepilogoForm.propTypes = {

}

export default RiepilogoForm
