import React,{ useState } from 'react'
import DatiContratto from "./datiContratto";

const DatiContrattoContainer = props => {
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)

    let Styles=''
  const ScadenzaVincolo=(e)=>{
     setValue1(e.target.value)
    }
    const DataImmatricolazione=(e)=>{
      setValue2(e.target.value)
     }
     console.log(value1)
    return (
            <DatiContratto DataImmatricolazione={DataImmatricolazione} ScadenzaVincolo={ScadenzaVincolo} value2={value2} value1={value1}/>
    )
}

DatiContrattoContainer.propTypes = {

}

export default DatiContrattoContainer
