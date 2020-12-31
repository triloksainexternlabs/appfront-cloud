import React from 'react'
import '../togglebtn/togglebtn.scss';
const ToggleBtn = (props) => {
    let { setValue, checked } = props

    return (
        <div className='toogle-btn-container'>
            <div>
            <div className='toogle-btn-wrapper'>
                <label>
                <span className='toggle-true checked'>Si</span>
                    <input type="radio" value="yes" />
                </label>
                <label >
                <span className='toggle-false'>No</span>
                    <input type="radio" value="yes" />
                </label>
            </div>
            </div>
        </div>
    )
}

export default ToggleBtn
