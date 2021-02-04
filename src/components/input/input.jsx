import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// adding style for textfield 
const useStyles = makeStyles((theme) => ({
    textField: {
        width: '424px',
        margin: '15px 70px',
    },
}));

const Input = props => {
    let { inputTextLable, inputTextId, inputTextName, onChange, value } = props;
    const classes = useStyles();
    return (
        <div>
            <TextField
                onChange={onChange}
                id={inputTextId}
                label={inputTextLable}
                name={inputTextName}
                className={classes.textField}
                variant="outlined"
                value={value}
            />
        </div>
    )
}
// validating props is string or not
Input.propTypes = {
    inputTextId: PropTypes.string,
    inputTextLable: PropTypes.string,
    inputTextName: PropTypes.string,
}

export default Input;
