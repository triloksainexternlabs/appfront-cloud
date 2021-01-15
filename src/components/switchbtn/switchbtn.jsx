import React, { useState } from 'react'
import '../switchbtn/switchbtn.scss'
import Switch from "react-switch";


const SwitchBtn = (props) => {
//    let  className = document.getElementsByClassName('react-switch-handle')
    const [checked, setChecked] = useState(false)
    const toggleChecked = (i,v) => {
        if (checked){
            setChecked(false)
            props.onChange(i,false)
        }
        else{
            setChecked(true)
            props.onChange(i,true)

        }
    }
    return (
        <div className='switch-btn-container'>
            <Switch
                width={100}
                checked={checked}
                onChange={()=>toggleChecked(props.id,props.name)}
                uncheckedIcon={
                    <span>Confermo</span>
                }
                checkedIcon={
                   "Confermo"
                }
                className="react-switch"
                id={props.id}
                offColor="#fff"
                onColor="#8A25B1"
                value={props.value}
                name={props.name}
                // onValueChange={(e) => props.formik.handleChange(props.name, e)}
                // onClick

            />
          
        </div>
    )
}


export default SwitchBtn
