import React from 'react';
import Input from "../../component/Input/input";
import '../../scss/datiAnagrafici.scss'
const DatiAnagrafici = props => {
    return (
        <div className="dati-anagrafici-container">
            <div className="dati-anagrafici-text">Dati Anagrafici</div>
            <div className="dati-anagrafici-form-container">
                    <div className="datidelcontraente-form">
                        <span>DATI DEL CONTRAENTE</span>
                        <div>
                            <Input inputTextId="CognomeName" inputTextName="CognomeName" inputTextLable="Cognome Name*"/>
                            <Input inputTextId="Indirizzi" inputTextName="Indirizzi" inputTextLable="Indirizzi*"/>
                            <Input inputTextId="Citta" inputTextName="Citta" inputTextLable="Citta*"/>
                            <Input inputTextId="Cap" inputTextName="Cap" inputTextLable="Cap*"/>
                            <Input inputTextId="CodiceFiscale" inputTextName="CodiceFiscale" inputTextLable="Codice Fiscale*"/>
                            <Input inputTextId="CodiaceCliente" inputTextName="CodiaceCliente" inputTextLable="Codiace Cliente*"/>
                            <Input inputTextId="Provincia" inputTextName="Provincia" inputTextLable="Provincia*"/>
                        </div>
                    </div>
                    <div className="form-line-dot" style={{display:'flex',flexDirection: 'column', alignItems: 'center', marginTop:38}}>
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
                        <button className="copia-btn">Copia</button>
                        
                    </div>
            </div>
        </div>
    )
}

DatiAnagrafici.propTypes = {

}

export default DatiAnagrafici
