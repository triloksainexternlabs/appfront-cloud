import React from 'react';
import AccordianBox from '../../components/accordian';
import '../riepilogoGaranzie/riepilogoGaranzie.scss'
const RiepilogoAccordian = (props) => {
    return (
        <div className='riepilogo-accordian'>
            <div className={`opacity-view ${props.isAccordian?"visible":''}`} />
            <AccordianBox
                onBlur={props.onBlur}
                onChange={props.onChange}
                name="Warranties.value1"
                value={props.formik.values.Warranties.value1}
                handleChange={props.formik.handleChange}
                id="0" setIsAccordian={props.setIsAccordian}
                Garanzia="R.C. Veicoli- B/M"
                Oggetto="Autovettura/Autocarro 35Q"
                discountAward={props.discountAward}
             />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value2" value={props.formik.values.Warranties.value2} handleChange={props.formik.handleChange}  id="1" setIsAccordian={props.setIsAccordian} Garanzia="Inc/Furto Con Scoperto" Oggetto="Autovettura/Autocarro 35Q" />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value3" value={props.formik.values.Warranties.value3} handleChange={props.formik.handleChange}  id="2" setIsAccordian={props.setIsAccordian} Garanzia="Collisione" Oggetto="Autovettura/Autocarro 35Q" />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value4" value={props.formik.values.Warranties.value4} handleChange={props.formik.handleChange}  id="3" setIsAccordian={props.setIsAccordian} Garanzia="Esternsione Kasko" Oggetto="Autovettura/Autocarro 35Q" />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value5" value={props.formik.values.Warranties.value5} handleChange={props.formik.handleChange}  id="4" setIsAccordian={props.setIsAccordian} Garanzia="Cash Back" Oggetto="Veicoli in Genere" />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value6" value={props.formik.values.Warranties.value6} handleChange={props.formik.handleChange}  id="5" setIsAccordian={props.setIsAccordian} Garanzia="Assistenza Base" Oggetto="Autovettura" />
            <AccordianBox discountAward={props.discountAward} onBlur={props.onBlur} onChange={props.onChange} name="Warranties.value7" value={props.formik.values.Warranties.value7} handleChange={props.formik.handleChange}  id="6" setIsAccordian={props.setIsAccordian} Garanzia="Pacchet. Eventi Cristaw" Oggetto="Autovettura/Autocarro 35Q" />
            <div className='total-amount'>
                <span>Totala</span>
                <span>266.72</span>
            </div>

        </div>
    )
}

export default RiepilogoAccordian
