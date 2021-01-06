import React, { Component } from 'react'
import './StampaPolizza.css'

export class StampaPolizza extends Component {
    render() {
        return (
            <div>
                 
               <div className="stampa-poliza-container" >
                   <div className="heading">Stampa Polizza</div>  
                                
                   <div>                    
                    <p className="middletext">E Stata Enessa La Poilizza n. 1.903.13.062552</p>
                    </div> 
                    <div class="lwtext">
                    <p className="lowertext">Premi Prosegui Apertura Della Finestra Di Stampa.</p>
                    <p className="lowertext"> Dopo Avere Stampare Le Note Infcrmative.</p>
                    </div>
                 </div>           
        </div>
                
        
        )
    }
}

export default StampaPolizza
