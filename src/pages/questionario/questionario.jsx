import React, { useState } from 'react';
import SwitchBtn from '../../components/switchbtn/switchbtn';
import ToggleBtn from '../../components/togglebtn/togglebtn';
import '../questionario/questionario.scss';

const Questionario = (props) => {
    const [arr, setArr] = useState([]);

    const handleToggle = (id, value) => {
        let temp = [...arr];
        let found = false;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp[i].value = value;
                found = true;
                break;
            }
        }
        if (!found) {
            temp.push({ id, value });
            console.log(temp, 'temp')
        }
        setArr(temp)
        props.getQuestions(temp, 'trueFalse')
        console.log('array:', temp);
    }

    return (
        <div className='questionario-container'>
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
                        <SwitchBtn width={100} label="Confermo" offColor={"#fff"} onColor="#8A25B1" onChange={props.onChange} name="value1" id={0}  {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <SwitchBtn width={100} label="Confermo" offColor={"#fff"} onColor="#8A25B1" onChange={props.onChange} name="value2" id={1}  {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <SwitchBtn width={100} label="Confermo" offColor={"#fff"} onColor="#8A25B1" onChange={props.onChange} name="value3" id={2} {...props} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Questionario