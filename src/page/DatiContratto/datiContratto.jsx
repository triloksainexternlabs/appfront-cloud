import React from 'react'
import PropTypes from 'prop-types'
import "../DatiContratto/datiContratto.scss";
import Input from "../../Component/InputFiled/inputField";
import DateField from "../../Component/DateField/dateField";

const DatiContratto = props => {
    return (
        <div>
            {/* {/* <Input/> */}
            <DateField/> 
            {/* <div className="label-text">Dati Contratto</div>
            <div>
                CIAO, CODICE 
            </div> */}
        </div>
    )
}

DatiContratto.propTypes = {

}

export default DatiContratto
