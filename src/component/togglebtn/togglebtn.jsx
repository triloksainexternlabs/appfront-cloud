import React from 'react'
import '../togglebtn/togglebtn.scss';
const ToggleBtn = (props) => {
    let { setValue, checked, id1, id2,id } = props;
    return (
        <div className='toogle-btn-container'>
            <div className='toogle-btn-wrapper'>
                <input disabled={id==id1} id={id1} onClick={setValue} type='button' value={'Si'} className={id==id1?'active':''}></input>
                <input disabled={id==id2} id={id2} onClick={setValue} type='button' value={'No'} className={id==id2?'active':''} ></input>
                {/* <label>
                <span className='toggle-true checked'>Si</span>
                    <input type="radio" value="yes" />
                </label>
                <label >
                <span className='toggle-false'>No</span>
                    <input type="radio" value="yes" />
                </label> */}
            </div>
        </div>
    )
}

export default ToggleBtn
