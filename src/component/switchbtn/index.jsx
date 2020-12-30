import React,{useState} from 'react'
import '../switchbtn/switchbtn.scss'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SwitchBtn = () => {
    const [checked, setChecked] = useState(false)
    const toggleChecked =()=>{
     if(checked)
     setChecked(false)
     else
     setChecked(true)
    }
    return (
        <div className='switch-btn-container'>
            <FormControlLabel
                control={<Switch checked={checked} onChange={toggleChecked} />}
                // label="Normal"
            />
        </div>
    )
}


export default SwitchBtn
