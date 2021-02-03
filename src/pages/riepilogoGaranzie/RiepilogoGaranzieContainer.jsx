import React, { useState } from 'react'
import RiepilogoGaranzie from './RiepilogoGaranzie';
import RiepilogoAccordian from './riepilogoAccordian';


export const RiepilogoGaranzieContainer = (props) => {
    const [values, setValues] = useState({})
    let prizeAmount = [29635, 2935, 5467, 2963, 8765, 8976, 5678, 23456];
    const [discountAward, setDiscountAward] = useState([]);
    const [isAccordian, setIsAccordian] = useState(false);

    const calculateDiscount = (e) => {
        console.log("calculateDiscount", 'calculateDiscount')

        const { id, value } = e.target;
        let discountValue = parseFloat(value);

        let prizeValue = prizeAmount[id];
        let discount = (prizeValue * discountValue) / 100;
        let discount_Award = prizeValue - discount;
        setDiscountAward({ ...discountAward, [id]: discount_Award })

    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.id]: parseFloat(e.target.value) })
        console.log("onChange", 'onChange')

    }
    const Accordian = () => {
        if (isAccordian)
            setIsAccordian(false)
        else
            setIsAccordian(true)
    }
    return (
        window.innerWidth < 500 ?
            <RiepilogoAccordian isAccordian={isAccordian} setIsAccordian={Accordian} discountAward={discountAward} onChange={onChange} onBlur={calculateDiscount} formik={props.formik} />
            :
            <RiepilogoGaranzie discountAward={discountAward} onChange={onChange} onBlur={calculateDiscount} formik={props.formik} />

    )
}

export default RiepilogoGaranzieContainer
