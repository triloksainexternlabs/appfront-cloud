const ContinueButton = (props) => {
    return ( 
        <button className="btn" onClick={()=>props.handleScroll(props.step)} >Prosegui</button>
     );
}
 
export default ContinueButton;