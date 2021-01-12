import React, { useState } from 'react';
import './dateField.scss';
import trashIcon from '../../images/trash.svg'

const DateField = props => {
  let { value, onChange, styles, label } = props;
  return (
    <div className={`date-picker-container ${value == null ? '' : 'onChange-color'}`}>
      <div className=" MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl input-container" >
        <input className='MuiInputBase-input MuiInput-input' onChange={onChange} type="date" />
        <label>{label}</label>

      </div>
      <div className={`icon-container ${styles ? 'hidden-icon' : ""}`}>
        <span>
          <img src={trashIcon} alt='' />
        </span>
      </div>

    </div>
  )
}
export default DateField;
