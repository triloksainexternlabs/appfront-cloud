import React from 'react'
import './Attestato.css'
import CustomizedInputs from './required'

   
export const Attestato =(props)=> {
    
        return (  
            <div class="Attestato-container">              
             <div class="Attestato-input-container">
             <CustomizedInputs formik={props.formik} />
            </div>
               
        </div>
        // </div>
                
                
        )
}

export default Attestato
