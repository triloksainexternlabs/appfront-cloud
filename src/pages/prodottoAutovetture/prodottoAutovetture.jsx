import React from 'react';
import PropTypes from 'prop-types';
import "./prodottoAutovetture.scss";
import Inputs from "../../component/Inputs/inputs";
import Label from '../../component/Inputs/label';

const ProdottoAutovetture = props => {
    return (
        <div className="prodotto-autovetture-container">
            <div className="prodotto-autovetture-title">Prodotto Autovetture</div>
            <div className="prodotto-autovetture-list">
                <div className="list-one">
                    <p>Garanzia</p>
                    <p>Collisione</p>
                </div>
                <div className="list-two">
                    <p>Oggetto</p>
                    <p>Autovetture / Autocarro 35Q </p>
                </div>
            </div>
            <div className="mid-line"></div>
            
            <div className="prodotto-autovetture-form">
                <div className="left-input-field">
                    <Label label='Decorrenza e Ora'/>
                    <Inputs placeholder='Decorrenza e Ora'/>
                    <div className="subleft-input-field">
                        <div>
                            <Label label='Eta’delVeicolo ( in Mesi)'/>
                            <Inputs placeholder='Eta’delVeicolo ( in Mesi)'/>
                        </div>
                        <div>
                            <Label label='Tipo Cuente'/>
                            <Inputs placeholder='Tipo Cuente'/>
                        </div>
                    </div>
                    <Label label='Codice Veicolo'/>
                    <Inputs placeholder='Codice Veicolo'/>
                </div>
                <div className="right-input-field">
                    <Label label='Classificazione Veicolo'/>
                    <Inputs placeholder='Classificazione Veicolo'/>
                    <Label label='Granzia Money Box'/>
                    <Inputs placeholder='Granzia Money Box'/>
                    <Label label='Provincia Di Tariffa'/>
                    <Inputs placeholder='Provincia Di Tariffa'/>
                </div>
            </div>
        </div>
    )
}

ProdottoAutovetture.propTypes = {

}

export default ProdottoAutovetture
