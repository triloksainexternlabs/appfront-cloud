import 'date-fns';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 200,
    },
  }));

const DateField = props => {
    const classes = useStyles();
    return (
        <div>
          <TextField
                id="date"
                label="Codice Assegnazione*"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
      />
        </div>
    )
}

DateField.propTypes = {

}

export default DateField
