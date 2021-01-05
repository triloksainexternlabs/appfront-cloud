import ProductComponent from '../../component/ProductComponent'
const ProductList = (props) => {
    return ( 
        <div className="form-two-content" >
        {
            props.list.map((value)=>
                <ProductComponent 
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