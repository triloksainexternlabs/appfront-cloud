import React, { useState } from 'react'
import '../togglebtn/togglebtn.scss';
const ToggleBtn = (props) => {
    console.log('toogleBtn',props.id);
    const [sinoFlag, setSinoFlag] = useState('');
    const [sinoId, setsinoId] = useState();
    const handleSiNoFlag = (str,id) => {
        if(str === 'si') {
            setSinoFlag(str)
            setsinoId(id)
            console.log('si vale',sinoId,sinoFlag);
        }
        else if (str === 'no'){
            setSinoFlag(str)
            setsinoId(id)
            console.log('no vale',sinoId,sinoFlag);
        }
    }
    
    return (
        <div className='toogle-btn-container'>
            <div className='toogle-btn-wrapper'>
                <input 
                    onClick={()=>handleSiNoFlag('si',props.id)}
                    type='button' 
                    value={'Si'} 
                    className={sinoFlag==='si' ?'active':''}
                ></input>
                <input 
                    onClick={()=>handleSiNoFlag('no',props.id)}
                    type='button' 
                    value={'No'} 
                    className={sinoFlag==='no' ?'active':''}
                ></input>
            </div>
        </div>
    )
}

export default ToggleBtn
