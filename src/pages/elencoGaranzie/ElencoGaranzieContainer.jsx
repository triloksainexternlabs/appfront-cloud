import ElencoGaranzie from "../elencoGaranzie/ElencoGaranzie"
import { useState } from 'react'
const ElencoGaranzieContainer = () => {
    const values=[]
    // const onChange = (event) => {
      
    //     console.log( [event.target.name],event.target.checked,'value')

    // }
    const [arr,setArr]=useState([]);

    const onChange=(e)=>{
        let temp = [...arr];
        let found = false;
        for(let i = 0; i < temp.length; i++) {
            if (temp[i].id === e.target.name) {
                temp[i].value=e.target.checked;
                found = true;
                break;
            }
        }
        if(!found){
            temp.push({id: e.target.name,value:e.target.checked});
            console.log(temp,'temp')
        }      
        setArr(temp)
    }

    return (
        <ElencoGaranzie onChange={onChange} />
    );
}

export default ElencoGaranzieContainer;