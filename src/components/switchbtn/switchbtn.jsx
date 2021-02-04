import React, { useState } from 'react'
import '../switchbtn/switchbtn.scss'
import Switch from "react-switch";


const SwitchBtn = (props) => {
    const [checked, setChecked] = useState(false) /*  used for switch confirm or not */
    const toggleChecked = (i, v) => {
        if (checked) {
            setChecked(false)
            props.onChange(i, false)
        }
        else {
            setChecked(true)
            props.onChange(i, true)

        }
    }
    return (
        <div className='switch-btn-container'>
            <Switch
                width={props.width}
                checked={checked}
                onChange={props.isSummary ? (e) => { props.formik.setFieldValue("Riepilogo.collectedTitle", e); setChecked(true) } : () => toggleChecked(props.id, props.name)}
                uncheckedIcon={
                    <span>{props.label}</span>
                }
                checkedIcon={
                    props.label
                }
                className="react-switch"
                id={props.id}
                offColor={props.offColor}
                onColor={props.onColor}
                value={props.value}
                name={props.name}

            />
        </div>
    )
}


export default SwitchBtn
