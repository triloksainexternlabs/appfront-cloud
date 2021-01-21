import React, { useState } from 'react';
import '../togglebtn/togglebtn.scss';

const ToggleBtn = (props) => {
    const [sinoFlag, setSinoFlag] = useState('');
    const [noLabel, setNoLabel] = useState(true);

    const handleSiNoFlag = (str) => {
        console.log(str,'str')
        props.handleToggle(props.id,str);
        if(str === true) {
            setSinoFlag(str)
            setNoLabel(true)
        }
        else if (str === false){
            setSinoFlag(str)
            setNoLabel(str)
        }
    }
    
    return (
        <div className='toogle-btn-container'>
            <div className='toogle-btn-wrapper'>
                <div>
                <label className={`si-label ${sinoFlag?'si-label-active':''}`}></label>
                <input 
                    id={props.id}
                    onClick={props.isSummary?(e)=>{props.formik.setFieldValue("Riepilogo.authorizeTreatment",e.target.value);setSinoFlag(true);setNoLabel(true)}:()=>handleSiNoFlag(true)}
                    type='button' 
                    value={true} 
                    className={sinoFlag===true ?'active':''}
                >
                </input>
                </div>
                <div>
                <label className={`no-label ${sinoFlag===false?noLabel===sinoFlag?'no-label-active':'no-label-disable':'no-label-disable'}`}></label>
                <input 
                    id={props.id}
                    onClick={props.isSummary? (e)=>{props.formik.setFieldValue("Riepilogo.authorizeTreatment",e.target.value); setSinoFlag(false);setNoLabel(false)}:()=>handleSiNoFlag(false)}
                    type='button' 
                    value={false} 
                    className={sinoFlag===false ?'active':''}
                ></input></div>
            </div>
        </div>
    )
}

export default ToggleBtn
