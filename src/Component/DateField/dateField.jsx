import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../DateField/dateField.scss';
import calendarIcon from '../../images/calendar.svg'
import trashIcon from '../../images/trash.svg'

const DateField = props => {
let { value,onChange }=props
  return (
    <div className={`date-picker-container ${value!==null?'onChange-color':''}`}>
      <div className="input-container" >
        {/* <span><img src={calendarIcon} alt=''/></span> */}
        <input onChange={onChange} type="date" />
        <label>Scadenza Vincolo*</label>

      </div>
      <div className='icon-container'>
        <span>
          <img src={trashIcon} alt='' />
        </span>
      </div>

    </div>
  )
}



export default DateField
