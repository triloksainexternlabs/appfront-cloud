import React from 'react'
import "../DatiContratto/datiContratto.scss";
import Input from "../../Component/InputFiled/inputField";
import DateField from "../../Component/DateField/dateField";
import SelectField from '../../Component/select/select';

const DatiContratto = props => {
    return (
        <div className='daticontratto-container'>
            <h1>Dati Contratto</h1>
            <p>codice intermediario</p>
            <div className='form-container'>
                <Input label="Decorrenza e ora*" />
                <Input label="Durata*" />
                <Input label="Scadenza Polizza*" />
                <Input label="Frazionamento*" />
                <Input label="Scadenza Rata*" />
                <Input label="Codice Autorizzaione*" />
                <Input label="Codice Produttore*" />
                <Input label="Vincolo*" />
                <DateField {...props} />
                <SelectField />
            </div>


        </div>
    )
}

DatiContratto.propTypes = {

}

export default DatiContratto
