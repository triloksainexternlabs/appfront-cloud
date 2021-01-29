import VehicleType from '../../components/vehicleType';
import { useState } from "react";
import '../../scss/productlist.scss'
const ProductList = (props) => {
    const [activeId, setActiveId] = useState(null)

    const changeIcon = (id) => {
        setActiveId(id)
        console.log(activeId, 'buttonRef.current.style.color=')
    }
    return ( 
        <div className="form-two-content" >
        {
            props.list.map((value)=>
                <VehicleType
                    changeIcon={changeIcon}
                    activeId={activeId}
                    id={value.id}
                    imgUrl = {value.imageUrl} 
                    text = {value.text} 
                    handleScroll = {props.handleScroll} 
                />
            )
        }
        </div>
    );
}
 
export default ProductList;