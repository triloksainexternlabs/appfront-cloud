import React from 'react';
import SwitchBtn from '../../component/switchbtn/switchbtn';
import ToggleBtn from '../../component/togglebtn/togglebtn';
import '../questionario/questionario.scss';

const Questionario = (props) => {
    return (
        <div className='questionario-container'>
            <h1 className='title'>Questionario</h1>
            <div>
                <div className='questionario-sub-container'>
                    <h1>Questionario Per La Valutazione Dell’adeguatezza Dei Contratti  Auto e Rami elementari offerti</h1>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn value1={props.value1} value2={props.value2}  id1={1} id2={2} {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <ToggleBtn value1={props.value3} value2={props.value4}  id1={3} id2={4}  {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ToggleBtn value1={props.value5} value2={props.value6}  id1={5} id2={6}  {...props} />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn value1={props.value7} value2={props.value8}  id1={7} id2={8}  {...props} />
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
