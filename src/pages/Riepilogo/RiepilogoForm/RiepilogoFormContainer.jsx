import React from 'react'
import RiepilogoForm from "./RiepilogoForm";

const RiepilogoFormContainer = props => {
    return (
        <div className='riepilogoForm' >
            <RiepilogoForm {...props}/>
        </div>
    )
}

RiepilogoFormContainer.propTypes = {

}

export default RiepilogoFormContainer
