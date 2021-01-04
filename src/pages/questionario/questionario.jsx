import React,{useState} from 'react';
import SwitchBtn from '../../component/switchbtn/switchbtn';
import ToggleBtn from '../../component/togglebtn/togglebtn';
import '../questionario/questionario.scss';

const Questionario = (props) => {
    const [arr,setArr]=useState([]);
    
    const handleToggle=(id,value)=>{
        let temp = [...arr];
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
        }      
        setArr(temp)
        console.log('array:',temp);
    }

    return (
        <div className='questionario-container'>
            <h1 className='title'>Questionario</h1>
            <div>
                <div className='questionario-sub-container'>
                    <h1>Questionario Per La Valutazione Dell’adeguatezza Dei Contratti  Auto e Rami elementari offerti</h1>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn 
                            id={1}  
                            handleToggle={handleToggle}
                        />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <ToggleBtn 
                            id={2}  
                            handleToggle={handleToggle}

                        />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <ToggleBtn 
                            id={3}  
                            handleToggle={handleToggle}
                        />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn 
                            id={4}  
                            handleToggle={handleToggle} 
                        />
                    </div>
                    
                    
                    
                </div>
                <div className='questionario-sub-container'>
                    <h1>Dichiarazione Di Rifiuto Do Fornire UNA o piu Delle Informazioni Richieste</h1>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <SwitchBtn {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <SwitchBtn {...props} />

                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <SwitchBtn {...props} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Questionario
