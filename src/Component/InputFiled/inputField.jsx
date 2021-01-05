import React from 'react'
import PropTypes from 'prop-types';
import "../InputFiled/inputField.scss";
import TextField from '@material-ui/core/TextField';

const InputFiled = props => {
    return (
        <div className="form-group">
           <TextField 
                id="standard-basic"     
                label={props.label} 
                className="textField text-field"
           />
        </div>
    )
}

 InputFiled.propTypes = {

}

export default  InputFiled
