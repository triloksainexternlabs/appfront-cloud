import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Inputs from '../component/Inputs/inputs'
import Label from '../component/Inputs/label'
import './ProclottoAuto.css'

export class ProclottoAuto extends Component {
    render() {
        return (
            <div className="proclotto-autovetture-Datiintegrative-container">
            <div className=" proclotto-autovetture-Datiintegrative-container-title">Prodotto Autovetture</div>            
             <div className=" proclotto-autovetture-Datiintegrative-container-sub-title">Dati Integrative</div> 
             <div class="base-line"></div>                      
             <div className="proclotto-autovetture-Datiintegrative-form">
                <div className="left-input-field">

                    <div className="input-label">
                        <Label label='Descrizione Velicolo'/>
                        <Inputs placeholder='Descrizione Velicoloa'/>
                    </div>

                   
                    <div className="input-label">
                        <Label label='Cod. Fiscale Int. Pra'/>
                        <Inputs placeholder='Cod. Fiscale Int. Pra'/>
                    </div>

                   
                    <div className="input-label">
                        <Label label='Comune INT. Pra'/>
                        <Inputs placeholder='Comune INT. Pra'/>
                    </div>


                    </div>
                   
                
                 <div className="right-input-field">
                    <div className="input-label">
                        <Label label='Targa Vecolo'/>
                        <Inputs placeholder='Targa Vecolo'/>
                    </div>
                    <div className="input-label">
                        <Label label='Nominativo INT. Pra'/>
                        <Inputs placeholder='Nominativo INT. Pra'/>
                    </div>
                    <div className="input-label">
                        <Label label='Provincia INT. Pra'/>
                        <Inputs placeholder='Provincia INT. Pra'/>
                    </div> 
                    </div>
                {/* </div>  */}
            </div>
        </div>
        )

    }
        
}

export default ProclottoAuto
