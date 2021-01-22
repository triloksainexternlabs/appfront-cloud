import React from 'react'

const Button = (props) => {
    return (
        <button  className="btn" onClick={props.onChange} >{props.name}</button>

    )
}

export default Button
