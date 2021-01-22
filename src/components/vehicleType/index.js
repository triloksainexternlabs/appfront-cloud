import React,{useState} from 'react'
const VehicleType = (props) => {
    const [active, setActive] = useState(null)
    const changeIcon=(id)=>{
        setActive(id)

    }
    return (
        <div id={props.id} className={`product ${props.id===active?'filled-text':''}`} onClick={()=>{props.handleScroll(2); changeIcon(props.id);}}>
              <div className={`img-container ${props.id===active?'filled-icon':''}`}><img src={props.imgUrl} alt="Ciclomotori"/></div>{props.text}
        </div>
    )
}
export default VehicleType;