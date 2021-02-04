import React from 'react'
import "../Inputs/inputs.scss";

const Label = props => {
    return (
        <div>
            <label className="input-label">{props.label}</label>
        </div>
    )
}
export default Label
