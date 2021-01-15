import React from 'react'
import "../Inputs/inputs.scss";

const Label = props => {
    return (
        <div>
            <label 
                className="input-label" 
                htmlFor=""
            >
                {props.label}
            </label>
        </div>
    )
}

Label.propTypes = {

}

export default Label
