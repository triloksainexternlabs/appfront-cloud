import React,{ useState } from 'react'
import DatiContratto from "./datiContratto";

const DatiContrattoContainer = props => {
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)
// used for select ScadenzaVincolo date 
  const ScadenzaVincolo=(e)=>{
     setValue1(e.target.value)
    }
  // used for select DataImmatricolazione date 
    const DataImmatricolazione=(e)=>{
      setValue2(e.target.value)
     }
    return (
            <DatiContratto formik={props.formik}  DataImmatricolazione={DataImmatricolazione} ScadenzaVincolo={ScadenzaVincolo} value2={value2} value1={value1}/>
    )
}
export default DatiContrattoContainer
