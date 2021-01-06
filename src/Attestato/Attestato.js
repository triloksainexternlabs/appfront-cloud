import React, { Component } from 'react'
import './Attestato.css'
import CustomizedInputs from './required'

   
export class Attestato extends Component {
    render() {
        return (  
            <div class="Attestato-container">              
            <div className="heading">Attestato Di Rischio</div>
             <div class="Attestato-container">
             <CustomizedInputs/>
            </div>
               
        </div>
        // </div>
                
                
        )
}
}

export default Attestato
