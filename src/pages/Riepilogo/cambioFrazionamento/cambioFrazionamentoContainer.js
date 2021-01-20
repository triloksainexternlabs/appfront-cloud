import React from 'react'
import CambioFrazionamento from './cambioFrazionamento'

const CambioFrazionamentoContainer = () => {
    const toggle=(id,value)=>{
        console.log('fdttewrt',id,value)
    }
    const onChange=()=>{

    }
    return (
        <div style={{padding: '0% 9%'}}>
            <CambioFrazionamento onChange={onChange} handleToggle={toggle} />
        </div>
    )
}

export default CambioFrazionamentoContainer
