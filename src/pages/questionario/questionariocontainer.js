import React,{useState} from 'react'
import Questionario from './ questionario'

const QuestionarioContainer = () => {
   const [checked, setChecked] = useState(true)
   const setValue=()=>{
      if(checked)
         setChecked(false)
      else
       setChecked(true)
      
   }
   return (
      <Questionario checked={checked} setValue={setValue} />
   )
}
export default QuestionarioContainer