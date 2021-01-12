import React, { useState } from 'react';
import '../togglebtn/togglebtn.scss';

const ToggleBtn = (props) => {
    const [sinoFlag, setSinoFlag] = useState('');
    
    const handleSiNoFlag = (str) => {
        props.handleToggle(props.id,str);
        if(str === 'si') {
            setSinoFlag(str)
        }
        else if (str === 'no'){
            setSinoFlag(str)
        }
    }
    
    return (
        <div className='toogle-btn-container'>
            <div className='toogle-btn-wrapper'>
                <input 
                    onClick={()=>handleSiNoFlag('si')}
                    type='button' 
                    value={'Si'} 
                    className={sinoFlag==='si' ?'active':''}
                ></input>
                <input 
                    onClick={()=>handleSiNoFlag('no')}
                    type='button' 
                    value={'No'} 
                    className={sinoFlag==='no' ?'active':''}
                ></input>
            </div>
        </div>
    )
}

export default ToggleBtn
