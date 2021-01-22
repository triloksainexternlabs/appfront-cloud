import React,{useState} from 'react'
import RiepilogoGaranzie from './RiepilogoGaranzie'

export const RiepilogoGaranzieContainer = (props) => {
    const [values, setValues] = useState({})
    let prizeAmount=[29635,2935,5467,2963,8765,8976,5678,23456];
    const [discountAward, setDiscountAward] = useState([])
    const calculateDiscount=(e)=>{
        const { id, value } = e.target;
        let discountValue = parseFloat(value);

        let prizeValue = prizeAmount[id];
        let discount = (prizeValue * discountValue) / 100;
        let discount_Award = prizeValue - discount;
        setDiscountAward({...discountAward,[id]:discount_Award})
    
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.id]: parseFloat(e.target.value) })
    }
    console.log(discountAward, 'values')

    return (
        <RiepilogoGaranzie discountAward={discountAward} onChange={onChange} onBlur={calculateDiscount} formik={props.formik} />
    )
}

export default RiepilogoGaranzieContainer
