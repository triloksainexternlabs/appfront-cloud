import VehicleType from '../../components/vehicleType';
const ProductList = (props) => {
    return ( 
        <div className="form-two-content" >
        {
            props.list.map((value)=>
                <VehicleType 
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