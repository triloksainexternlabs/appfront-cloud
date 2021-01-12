import React, { Component } from 'react'
import './Attestato.css'
import CustomizedInputs from './required'
import Progressbar from '../ProgressBar/progressbar'

   
export class Attestato extends Component {
    render() {
        return (        
                 <div class="alatadiv">
                   
                <h1 className="heading">Attestato Di Rischio</h1>
                <hr class="borderline"></hr>
                
                     <div>
                    <CustomizedInputs/>
                    </div>
                      <div>
                     {/* <Progressbar/> */}
                 </div>
                </div>
                
                
        )
}
}

export default Attestato
