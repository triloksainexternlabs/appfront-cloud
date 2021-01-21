import React from 'react';
import Input from "../../components/input/input";
import '../../scss/datiAnagrafici.scss'
const DatiAnagrafici = props => {
    return (
        <div className="dati-anagrafici-container">
            <div className="dati-anagrafici-form-container">
                    <form  className="datidelcontraente-form">
                        <span>DATI DEL CONTRAENTE</span>
                        <div>
                            <Input value={props.formik.values.PersonalData.sureName} onChange={props.formik.handleChange} inputTextId="PersonalData.sureName" inputTextName="PersonalData.sureName" inputTextLable="Cognome Name*"/>
                            <Input value={props.formik.values.PersonalData.addresses} onChange={props.formik.handleChange}  inputTextId="PersonalData.addresses" inputTextName="PersonalData.addresses" inputTextLable="Indirizzi*"/>
                            <Input value={props.formik.values.PersonalData.city} onChange={props.formik.handleChange}  inputTextId="PersonalData.city" inputTextName="PersonalData.city" inputTextLable="Citta*"/>
                            <Input value={props.formik.values.PersonalData.postalCode} onChange={props.formik.handleChange}  inputTextId="PersonalData.postalCode" inputTextName="PersonalData.postalCode" inputTextLable="Cap*"/>
                            <Input value={props.formik.values.PersonalData.fiscalCode} onChange={props.formik.handleChange}  inputTextId="PersonalData.fiscalCode" inputTextName="PersonalData.fiscalCode" inputTextLable="Codice Fiscale*"/>
                            <Input value={props.formik.values.PersonalData.customer} onChange={props.formik.handleChange}  inputTextId="PersonalData.customer" inputTextName="PersonalData.customer" inputTextLable="Codiace Cliente*"/>
                            <Input value={props.formik.values.PersonalData.district} onChange={props.formik.handleChange}  inputTextId="PersonalData.district" inputTextName="PersonalData.district" inputTextLable="Provincia*"/>
                        </div>
                    </form>
                    <div className="form-line-dot" style={{display:'flex',flexDirection: 'column', alignItems: 'center', marginTop: 38, marginLeft: 109, marginRight: 109}}>
                        <div className="form-dot" style={{borderRadius: '50%',border: '5px solid', color: '#0C87C8'}}></div>
                        <div className="form-border"></div>
                        <div className="form-dot" style={{borderRadius: '50%',border: '5px solid', color: '#0C87C8'}}></div>
                    </div>
                    <div className="datidelveicolo-form">
                        <span className="datidelveicolo-title">DATI DEL PROPREIETARIO DEL VEICOLO</span>
                        <div>
                            <Input inputTextId="CognomeName" inputTextName="CognomeName" inputTextLable="Cognome Name*"/>
                            <Input inputTextId="Indirizzi" inputTextName="Indirizzi" inputTextLable="Indirizzi*"/>
                            <Input inputTextId="Citta" inputTextName="Citta" inputTextLable="Citta*"/>
                            <Input inputTextId="Cap" inputTextName="Cap" inputTextLable="Cap*"/>
                            <Input inputTextId="CodiceFiscale" inputTextName="CodiceFiscale" inputTextLable="Codice Fiscale*"/>
                            <Input inputTextId="CodiaceCliente" inputTextName="CodiaceCliente" inputTextLable="Codiace Cliente*"/>
                            <Input inputTextId="Provincia" inputTextName="Provincia" inputTextLable="Provincia*"/>
                        </div>
                        <button  className="copia-btn">Copia</button>
                        
                    </div>
            </div>
        </div>
    )
}

DatiAnagrafici.propTypes = {

}

export default DatiAnagrafici
