import React, { useState } from 'react'
import RiepilogoGaranzie from './RiepilogoGaranzie';
import RiepilogoAccordian from './riepilogoAccordian';


export const RiepilogoGaranzieContainer = (props) => {
    const [values, setValues] = useState({})
    let prizeAmount = [29635, 2935, 5467, 2963, 8765, 8976, 5678, 23456]; //Premio amount ------ 
    const [discountAward, setDiscountAward] = useState([]);/* used for final discount on product */
    const [isAccordian, setIsAccordian] = useState(false);

    // calculate discount on premium
    const calculateDiscount = (e) => {
        const { id, value } = e.target; 
        let discountValue = parseFloat(value);  /*  premium discount value   */
        let prizeValue = prizeAmount[id]; /* total premium amount   */
        let discount = (prizeValue * discountValue) / 100;
        let discount_Award = prizeValue - discount;     
        setDiscountAward({ ...discountAward, [id]: discount_Award })

    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.id]: parseFloat(e.target.value) })
    }
    // used for mobile view 
    const Accordian = () => {
        if (isAccordian)
            setIsAccordian(false)
        else
            setIsAccordian(true)
    }
    return (
        window.innerWidth < 500 ?
            <RiepilogoAccordian isAccordian={isAccordian} setIsAccordian={Accordian} discountAward={discountAward} onChange={onChange} onBlur={calculateDiscount} formik={props.formik} />  /* for mobile view */
            :
            <RiepilogoGaranzie discountAward={discountAward} onChange={onChange} onBlur={calculateDiscount} formik={props.formik} />   /* for desktop or laptop view */
    )
}

export default RiepilogoGaranzieContainer
