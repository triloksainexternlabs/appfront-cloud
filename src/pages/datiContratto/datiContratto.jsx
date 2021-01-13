import React from 'react'
import "./datiContratto.scss";
import Input from "../../components/inputFiled/inputField";
// import DateField from "../../components/dateField/dateField";
import DateField from '../../components/dateField/dateField';
import SelectField from '../../components/select/select';

const DatiContratto = props => {
    let {DataImmatricolazione, ScadenzaVincolo,value1,value2,formik} =props;
    
    return (
        <div className='daticontratto-container'>
            <h1>Dati Contratto</h1>
            <p>codice intermediario</p>
            <div className='form-container'>
                <Input value={props.formik.values.contractData.effectiveDateTime} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  id="Decorrenza" label="Decorrenza e ora*" />
                <Input value={props.formik.values.contractData.duration} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Durata*" />
                <Input value={props.formik.values.contractData.splittingUp} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Scadenza Polizza*" />
                <Input value={props.formik.values.contractData.authorizationCode} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Frazionamento*" />
                <Input value={props.formik.values.contractData.constraint} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Scadenza Rata*" />
                <Input value={props.formik.values.contractData.coInsurancePolicy} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Codice Produttore*" />
                <Input value={props.formik.values.contractData.manufacturerCode} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Codice Autorizzaione*" />
                <Input value={props.formik.values.contractData.assignmentCode} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Vincolo*" />
                <DateField value={props.formik.values.contractData.newCertificate} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Scadenza Vincolo*" onChange={ScadenzaVincolo} value={value1} />
                <SelectField value={props.formik.values.contractData.registrationDate} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  name="Polizza in Cossicurazione*" />
                <SelectField value={props.formik.values.contractData.duration} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  name="Codice Assegnazione*" />
                <SelectField value={props.formik.values.contractData.duration} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  name="Nuovo Attestato*" />
                <DateField value={props.formik.values.contractData.duration} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration"  label="Data Immatricolazione*" styles={true} onChange={DataImmatricolazione} value={value2} />

            </div>
            policyExpiry
            coInsurancePolicy
            constraintExpiration
        </div>
    )
}

DatiContratto.propTypes = {

}

export default DatiContratto
