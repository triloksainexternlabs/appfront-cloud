import React from 'react'
import '../cambioFrazionamento/cambioFrazionamento.scss';
import SwitchButton from '../../../components/switchbtn/switchbtn';
import ToggleButton from '../../../components/togglebtn/togglebtn';
import Inputs from '../../../component/Inputs/inputs';
import Label from '../../../component/Inputs/label';

const CambioFrazionamento = (props) => {
    return (
        <div className='CambioFrazionamento'>
            <div className='cambio-frazionamento-container' >
                <h1>Cambio Frazionamento</h1>
                <div>
                    <div className='input-wrapper'>
                    <Label label="Frazionamento*" />
                    <Inputs />
                    </div>
                    <div className='input-wrapper'>
                    <Label label="Scadenza Rata*" />
                    <Inputs />
                    </div>
                </div>
                <h1>Privacy</h1>
                <div className='privacy-container'>
                <Label label="Cansenso ai trattamento del dati (d.lgs 196/03)*" />
                    <Inputs placeholder="" />
                    <div className='privacy-sub-container'>
                        <div>
                            <div>
                            <p>Autorizza ai trattamento</p>
                                <ToggleButton  id={1} handleToggle={props.handleToggle}  />
                            </div>

                        </div>
                        <div>
                            <div>
                            <p>Eseguire lincasso del titolo</p>
                                <SwitchButton btnText=""  {...props} name="a" id={0} width={70} label="" onColor="#0C87C8" offColor="#fff" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CambioFrazionamento
