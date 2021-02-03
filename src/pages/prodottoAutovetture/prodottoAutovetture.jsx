import React from 'react';
import "./prodottoAutovetture.scss";
import Inputs from "../../component/Inputs/inputs";
import Label from '../../component/Inputs/label';

const ProdottoAutovetture = props => {
    return (

        <div className="prodottoAutovetture-container">
            {/* <div className="prodotto-autovetture-title">Prodotto Autovetture</div> */}
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
                    <div className="input-label">
                        <Label label='Decorrenza e Ora' />
                        <Inputs value={props.formik.values.carProduct.effectiveDateAndTime} onChange={props.formik.handleChange} inputTextName="carProduct.effectiveDateAndTime" placeholder='Decorrenza e Ora' />
                    </div>
                    <div className="subleft-input-field">
                        <div className="input-label">
                            <Label label='Eta’delVeicolo ( in Mesi)' />
                            <Inputs value={props.formik.values.carProduct.ageOfVeichle} onChange={props.formik.handleChange} inputTextName="carProduct.ageOfVeichle" placeholder='Eta’delVeicolo ( in Mesi)' />
                        </div>
                        <div className="input-label">
                            <Label label='Tipo Cuente' />
                            <Inputs value={props.formik.values.carProduct.cuenteType} onChange={props.formik.handleChange} inputTextName="carProduct.cuenteType" placeholder='Tipo Cuente' />
                        </div>
                    </div>
                    <div className="input-label">
                        <Label label='Codice Veicolo' />
                        <Inputs value={props.formik.values.carProduct.vehichleCode} onChange={props.formik.handleChange} inputTextName="carProduct.vehichleCode" placeholder='Codice Veicolo' />
                        <span className="preimum-text">Premio non calcolato*</span>
                    </div>
                </div>
                <div className="right-input-field">
                    <div className="input-label">
                        <Label label='Classificazione Veicolo' />
                        <Inputs value={props.formik.values.carProduct.vehicleClassification} onChange={props.formik.handleChange} inputTextName="carProduct.vehicleClassification" placeholder='Classificazione Veicolo' />
                    </div>
                    <div className="input-label _input">
                        <Label label='Granzia Money Box' />
                        <Inputs value={props.formik.values.carProduct.granziaMoneyBox} onChange={props.formik.handleChange} inputTextName="carProduct.granziaMoneyBox" placeholder='Granzia Money Box' />
                    </div>
                    <div className="input-label">
                        <Label label='Provincia Di Tariffa' />
                        <Inputs value={props.formik.values.carProduct.tariffProvince} onChange={props.formik.handleChange} inputTextName="carProduct.tariffProvince" placeholder='Provincia Di Tariffa' />
                        {/* <span className="preimum-text">Premio non calcolato*</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

ProdottoAutovetture.propTypes = {

}

export default ProdottoAutovetture
