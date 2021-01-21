import React from 'react'
import Input from '@material-ui/core/Input';
import "../Inputs/inputs.scss";

const Inputs = props => {
    let {value,onChange,inputTextName,type} =props
    return (
        <div>
            <div className="main-part">
                    <Input 
                        type={`${type}`}
                        className="input-tag"
                        placeholder={props.placeholder} 
                        inputProps={{ name: inputTextName,
                            id: `${inputTextName}`, }} 
                        name={inputTextName}
                        value={value}
                        onChange={onChange}
                    />
                </div>
        </div>
    )
}

export default Inputs
