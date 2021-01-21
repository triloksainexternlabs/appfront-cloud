import React from 'react'
import CambioFrazionamento from './cambioFrazionamento'

const CambioFrazionamentoContainer = (props) => {
    const toggle=(id,value)=>{
        props.summary({id,value})
    }
    const onChange=(id,value)=>{
    props.summary({id,value})
    }
    return (
        <div style={{padding: '0% 9%'}}>
            <CambioFrazionamento {...props} onChange={onChange} handleToggle={toggle} />
        </div>
    )
}

export default CambioFrazionamentoContainer
