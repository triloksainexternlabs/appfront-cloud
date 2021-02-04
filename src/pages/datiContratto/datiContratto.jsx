import React from 'react'
import "./datiContratto.scss";
import Input from "../../components/inputFiled/inputField";
import DateField from '../../components/dateField/dateField';
import SelectField from '../../components/select/select';

const DatiContratto = props => {

    return (
        <div className='daticontratto-container'>
            <p>codice intermediario</p>
            <form className='form-container'>
                <Input value={props.formik.values.contractData.effectiveDateTime} onChange={props.formik.handleChange} inputTextId="contractData.effectiveDateTime" inputTextName="contractData.effectiveDateTime" id="Decorrenza" label="Decorrenza e ora*" />
                <Input value={props.formik.values.contractData.duration} onChange={props.formik.handleChange} inputTextId="contractData.duration" inputTextName="contractData.duration" label="Durata*" />
                <Input value={props.formik.values.contractData.policyExpiry} onChange={props.formik.handleChange} inputTextId="contractData.policyExpiry" inputTextName="contractData.policyExpiry" label="Scadenza Polizza*" />
                <Input value={props.formik.values.contractData.splittingUp} onChange={props.formik.handleChange} inputTextId="contractData.splittingUp" inputTextName="contractData.splittingUp" label="Frazionamento*" />
                <Input value={props.formik.values.contractData.installmentDeadline} onChange={props.formik.handleChange} inputTextId="contractData.installmentDeadline" inputTextName="contractData.installmentDeadline" label="Scadenza Rata*" />
                <Input value={props.formik.values.contractData.authorizationCode} onChange={props.formik.handleChange} inputTextId="contractData.authorizationCode" inputTextName="contractData.authorizationCode" label="Codice Autorizzazione*" />
                <Input value={props.formik.values.contractData.manufacturerCode} onChange={props.formik.handleChange} inputTextId="contractData.manufacturerCode" inputTextName="contractData.manufacturerCode" label="Codice Produttore*" />
                <Input value={props.formik.values.contractData.constraint} onChange={props.formik.handleChange} inputTextId="contractData.constraint" inputTextName="contractData.constraint" label="Vincolo*" />
                <DateField value={props.formik.values.contractData.constraintExpiry} onChange={props.formik.handleChange} inputTextId="contractData.constraintExpiry" inputTextName="contractData.constraintExpiry" label="Scadenza Vincolo*" />
                <SelectField value={props.formik.values.contractData.coInsurancePolicy} onChange={props.formik.handleChange} inputTextId="contractData.coInsurancePolicy" inputTextName="contractData.coInsurancePolicy" name="Polizza in Cossicurazione*" />
                <SelectField value={props.formik.values.contractData.assignmentCode} onChange={props.formik.handleChange} inputTextId="contractData.assignmentCode" inputTextName="contractData.assignmentCode" name="Codice Assegnazione*" />
                <SelectField value={props.formik.values.contractData.newCertificate} onChange={props.formik.handleChange} inputTextId="contractData.newCertificate" inputTextName="contractData.newCertificate" name="Nuovo Attestato*" />
                <DateField value={props.formik.values.contractData.registrationDate} onChange={props.formik.handleChange} inputTextId="contractData.registrationDate" inputTextName="contractData.registrationDate" label="Data Immatricolazione*" styles={true} />
            </form>

        </div>
    )
}

export default DatiContratto