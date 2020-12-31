import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '424px',
        margin: '15px 0px',
    },
  }));

const Input = props => {
    let {inputTextLable, inputTextId, inputTextName} = props;
    const classes = useStyles();
    return (
        <div>
            <TextField 
                id={inputTextId} 
                label={inputTextLable}
                name={inputTextName}
                className={classes.textField} 
                variant="outlined" 
            />
        </div>
    )
}

Input.propTypes = {
    inputTextId: PropTypes.string,
    inputTextLable: PropTypes.string,
    inputTextName: PropTypes.string,
}

export default Input;
