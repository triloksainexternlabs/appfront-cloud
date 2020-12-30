import React from 'react';
import PropTypes from 'prop-types';
import "../DatiAnagrafici/datiAnagrafici.scss";
import Input from "../../component/Input/input";

const DatiAnagrafici = props => {
    return (
        <div className="dati-anagrafici-container">
            <div className="dati-anagrafici-text">Dati Anagrafici</div>
            <div className="dati-anagrafici-form-container">
                    <div className="datidelcontraente-form">
                        <span>DATI DEL CONTRAENTE</span>
                        <Input inputTextId="CognomeName" inputTextName="CognomeName" inputTextLable="Cognome Name*"/>
                        <Input inputTextId="Indirizzi" inputTextName="Indirizzi" inputTextLable="Indirizzi*"/>
                        <Input inputTextId="Citta" inputTextName="Citta" inputTextLable="Citta*"/>
                        <Input inputTextId="Cap" inputTextName="Cap" inputTextLable="Cap*"/>
                        <Input inputTextId="CodiceFiscale" inputTextName="CodiceFiscale" inputTextLable="Codice Fiscale*"/>
                        <Input inputTextId="CodiaceCliente" inputTextName="CodiaceCliente" inputTextLable="Codiace Cliente*"/>
                        <Input inputTextId="Provincia" inputTextName="Provincia" inputTextLable="Provincia*"/>
                    </div>
                    <div style={{display:'flex',flexDirection: 'column'}}>
                        <div style={{borderRadius: '50%',border: '5px solid'}}></div>
                        <div className="form-border"></div>
                        <div style={{borderRadius: '50%',border: '5px solid'}}></div>
                    </div>
                    <div className="datidelveicolo-form">
                        <span>DATI DEL PROPREIETARIO DEL VEICOLO</span>
                        <Input inputTextId="CognomeName" inputTextName="CognomeName" inputTextLable="Cognome Name*"/>
                        <Input inputTextId="Indirizzi" inputTextName="Indirizzi" inputTextLable="Indirizzi*"/>
                        <Input inputTextId="Citta" inputTextName="Citta" inputTextLable="Citta*"/>
                        <Input inputTextId="Cap" inputTextName="Cap" inputTextLable="Cap*"/>
                        <Input inputTextId="CodiceFiscale" inputTextName="CodiceFiscale" inputTextLable="Codice Fiscale*"/>
                        <Input inputTextId="CodiaceCliente" inputTextName="CodiaceCliente" inputTextLable="Codiace Cliente*"/>
                        <Input inputTextId="Provincia" inputTextName="Provincia" inputTextLable="Provincia*"/>
                        <button className="copia-btn">Copia</button>
                    </div>
            </div>
        </div>
    )
}

DatiAnagrafici.propTypes = {

}

export default DatiAnagrafici
