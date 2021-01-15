import React from 'react'
import "./inputField.scss";
import TextField from '@material-ui/core/TextField';

const InputFiled = props => {
    let {value,onChange,inputTextName,inputTextId} =props
    return (
        <div id={props.id} className="form-group">
           <TextField 
                id={inputTextId}   
                label={props.label} 
                className="textField text-field"
                value={value}
                onChange={onChange}
                name={inputTextName}
           />
        </div>
    )
}

 InputFiled.propTypes = {

}

export default  InputFiled
