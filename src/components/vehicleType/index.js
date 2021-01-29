import React, { useState } from 'react'
const VehicleType = (props) => {

   

    return (
        <div key={props.id} className={`product ${props.activeId === props.id ? 'filled-icon' : ''}`} onClick={() => { props.changeIcon(props.id); props.handleScroll(2); }}>
            <div className={`img-container`}><img src={props.imgUrl} alt="Ciclomotori" /></div>{props.text}
        </div>
    )
}
export default VehicleType;