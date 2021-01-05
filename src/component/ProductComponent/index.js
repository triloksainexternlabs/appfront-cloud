const ProductComponent = (props) => {
    return (
        <div className="product" onClick={()=>props.handleScroll(2)}>
              <div className="img-container"><img src={props.imgUrl} alt="Ciclomotori"/></div>{props.text}
        </div>
    )
}
export default ProductComponent;