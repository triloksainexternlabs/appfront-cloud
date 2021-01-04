import React,{useState} from 'react'
import Questionario from './ questionario'

const QuestionarioContainer = () => {
   const [checked, setChecked] = useState()
   const [id, setId] = useState(0)
   const [value1, setValue1] = useState(false)
   const [value2, setValue2] = useState(false)
   const [value3, setValue3] = useState(false)
   const [value4, setValue4] = useState(false)

   let flag={}
   const setValue=(e)=>{
      // if(checked)
         // setChecked(e.target.id)
      // else
      //  setChecked(e.target.id)
      const clicked = e.target.id
      if(id === clicked) { 
         setId('');
      } else {
         
         setId(clicked)
     }
     console.log(clicked,'value')
      
   }
  
   return (
      <Questionario id={id} checked={flag} setValue={setValue} />
   )
}
export default QuestionarioContainer