import React,{useState} from 'react'
import Questionario from '../questionario/questionario'

const QuestionarioContainer = (props) => {

   const [values, setValues] = useState([])

 const onChange=(id,value)=>{
   let temp = [...values];
   let found = false;
   for(let i = 0; i < temp.length; i++) {
       if (temp[i].id === id) {
           temp[i].value=value;
           found = true;
           break;
       }
   }
   if(!found){
       temp.push({id,value});
       console.log(temp,'temp')
   }      
   setValues(temp)
   console.log('array:',temp);
}
   return (
      <Questionario onChange={onChange} formik={props.formik}/>
   )
}
export default QuestionarioContainer