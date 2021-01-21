import React from 'react'
import ContinueButton from '../../components/continueButton'
import './StampaPolizza.css'

const StampaPolizza =(props)=> {

        return (
               <div className="stampa-poliza-container" >
                   <div>                    
                    <p className="middletext">E Stata Enessa La Poilizza n. 1.903.13.062552</p>
                    </div> 
                    <div class="lwtext">
                    <p className="lowertext">Premi Prosegui Apertura Della Finestra Di Stampa.</p>
                    <p className="lowertext"> Dopo Avere Stampare Le Note Infcrmative.</p>
                    </div>
                    <ContinueButton handhandleScroll={props.handleScroll} step={props.step} />

                 </div>   
        
        )
    
}

export default StampaPolizza
