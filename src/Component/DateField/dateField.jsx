import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import '../DateField/dateField.scss';
import calendarIcon from '../../images/calendar.svg'
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
    <div className='date-picker-container'>
      <div className='input-container' >
        <input value='777' type="date" />
        <label>Scadenza Vincolo*</label>
      </div>
      <div className='icon-container'>
        <span><img src={calendarIcon} /></span>
        <span>
          <i class="fa fa-trash-o"></i>
        </span>
      </div>

    </div>
  )
}

DateField.propTypes = {

}

export default DateField
