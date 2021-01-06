import React from 'react'
import "../DatiContratto/datiContratto.scss";
import Input from "../../Component/InputFiled/inputField";
import DateField from "../../Component/DateField/dateField";
import SelectField from '../../Component/select/select';

const DatiContratto = props => {
    let {DataImmatricolazione, ScadenzaVincolo,value1,value2} =props
    return (
        <div className='daticontratto-container'>
            <h1>Dati Contratto</h1>
            <p>codice intermediario</p>
            <div className='form-container'>
                <Input id="Decorrenza" label="Decorrenza e ora*" />
                <Input label="Durata*" />
                <Input label="Scadenza Polizza*" />
                <Input label="Frazionamento*" />
                <Input label="Scadenza Rata*" />
                <Input label="Codice Autorizzaione*" />
                <Input label="Codice Produttore*" />
                <Input label="Vincolo*" />
                <DateField label="Scadenza Vincolo*" onChange={ScadenzaVincolo} value={value1} />
                <SelectField name="Polizza in Cossicurazione*" />
                <SelectField name="Codice Assegnazione*" />
                <SelectField name="Nuovo Attestato*" />
                <DateField label="Data Immatricolazione*" styles={true} onChange={DataImmatricolazione} value={value2} />

            </div>


        </div>
    )
}

DatiContratto.propTypes = {

}

export default DatiContratto
