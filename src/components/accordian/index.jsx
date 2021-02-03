import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Input } from '@material-ui/core';

const AccordianBox = (props) => {
  let { Garanzia, Oggetto, name, id, onChange, value, handleChange } = props;

  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          onClick={() => { props.setIsAccordian() }}
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<div class="checkbox-group">
              <input id={id} name={name} value={value} onChange={handleChange} type="checkbox" className='input' />
              <label htmlFor="Veicoli"></label></div>}
            checkedIcon={<Input />}
          // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}

          />
          <div className='accordian-data-container'>
            <div className='accordian-sub-container'>
              <span>Garanzia</span>
              <span>{Garanzia}</span>
            </div>
            <div className='accordian-sub-container'>
              <span>Oggetto</span>
              <span>{Oggetto}</span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='premio-container'>
            <div>
              <p>Premio</p>
              <span>296,35</span>
            </div>
            <div>
              <p>Sconto</p>
              <input id={props.id} type="number" onBlur={props.onBlur} onChange={onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input>
            </div>
            <div>
              <p>Premio Scontato</p>
              <span>{props.discountAward[id] ? props.discountAward[id] : '00.00'}</span>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordianBox
