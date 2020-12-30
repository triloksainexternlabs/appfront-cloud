import React from 'react';
import SwitchBtn from '../../component/switchbtn';
import ToggleBtn from '../../component/togglebtn';
import '../questionario/questionario.scss';

const Questionario = () => {
    return (
        <div className='questionario-container'>
            <h1 className='title'>Questionario</h1>
            <div>
                <div className='questionario-sub-container'>
                    <h1>Questionario Per La Valutazione Dell’adeguatezza Dei Contratti  Auto e Rami elementari offerti</h1>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <ToggleBtn />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ToggleBtn />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <ToggleBtn />
                    </div>
                </div>
                <div className='questionario-sub-container'>
                    <h1>Dichiarazione Di Rifiuto Do Fornire UNA o piu Delle Informazioni Richieste</h1>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque.</p>
                        <SwitchBtn />
                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <SwitchBtn />

                    </div>
                    <div className='questionario'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum urna tristique donec id enim, neque. Consectetur duis tincidunt arcu nunc suspendisse sagittis fames quis justo.</p>
                        <SwitchBtn />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Questionario
