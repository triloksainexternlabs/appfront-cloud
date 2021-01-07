import React, { useState } from 'react'
import '../switchbtn/switchbtn.scss'
import Switch from "react-switch";


const SwitchBtn = () => {
   let  className = document.getElementsByClassName('react-switch-handle')

    const [checked, setChecked] = useState(false)
    const toggleChecked = () => {
        if (checked){
            setChecked(false)
            // className[0].style.transform = "translateX(50px)";
        }
        else{
            setChecked(true)
            // className[0].style.transform = "translateX(50px)";
        }
    }
    return (
        <div className='switch-btn-container'>
            <Switch
                width={100}
                checked={checked}
                onChange={toggleChecked}
                uncheckedIcon={
                    <span>Confermo</span>
                }
                checkedIcon={
                   "Confermo"
                }
                className="react-switch"
                id="icon-switch"
                offColor="#fff"
                onColor="#8A25B1"
            />
        </div>
    )
}


export default SwitchBtn
