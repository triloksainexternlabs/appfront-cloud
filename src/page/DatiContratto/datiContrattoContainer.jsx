import React,{ useState } from 'react'
import DatiContratto from "../DatiContratto/datiContratto";

const DatiContrattoContainer = props => {
    const [value, setValue] = useState(null)
    let Styles=''
  const onChange=(e)=>{
     setValue(e.target.value)
    }
    return (
            <DatiContratto onChange={onChange} value={value}/>
    )
}

DatiContrattoContainer.propTypes = {

}

export default DatiContrattoContainer
