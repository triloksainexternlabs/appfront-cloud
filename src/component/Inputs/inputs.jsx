import React from 'react'
import Input from '@material-ui/core/Input';
import "../Inputs/inputs.scss";

const Inputs = props => {
    let {value,onChange,inputTextName} =props
    return (
        <div>
            <div className="main-part">
                    <Input 
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

Inputs.propTypes = {

}

export default Inputs
