import React from 'react'
import '../cambioFrazionamento/cambioFrazionamento.scss';
import SwitchButton from '../../../components/switchbtn/switchbtn';
import ToggleButton from '../../../components/togglebtn/togglebtn';
import Inputs from '../../../component/Inputs/inputs';
import Label from '../../../component/Inputs/label';

const CambioFrazionamento = (props) => {
    console.log(props.formik)
    return (
        <div className='CambioFrazionamento'>
            <div className='cambio-frazionamento-container' >
                <h1>Cambio Frazionamento</h1>
                <div>
                    <div className='input-wrapper'>
                        <Label label="Frazionamento*" />
                        <Inputs value={props.formik.values.Riepilogo.frazionamento2} onChange={props.formik.handleChange} inputTextId="Riepilogo.frazionamento2" inputTextName="Riepilogo.frazionamento2" />
                    </div>
                    <div className='input-wrapper'>
                        <Label label="Scadenza Rata*" />
                        <Inputs value={props.formik.values.Riepilogo.scadenzaRata} onChange={props.formik.handleChange} inputTextId="Riepilogo.scadenzaRata" inputTextName="Riepilogo.scadenzaRata" type='date' />
                    </div>
                </div>
                <h1>Privacy</h1>
                <div className='privacy-container'>
                    <Label label="Cansenso ai trattamento del dati (d.lgs 196/03)*" />
                    <Inputs value={props.formik.values.Riepilogo.dataProcessing} onChange={props.formik.handleChange} inputTextId="Riepilogo.dataProcessing" inputTextName="Riepilogo.dataProcessing" placeholder="" />
                    <div className='privacy-sub-container'>
                        <div>
                            <div>
                                <p>Autorizza ai trattamento</p>
                                <ToggleButton {...props} isSummary={true} value={props.formik.values.Riepilogo.authorizeTreatment} handleToggle={props.handleToggle} inputTextId="Riepilogo.authorizeTreatment" name="Riepilogo.authorizeTreatment" id={0} />
                            </div>

                        </div>
                        <div>
                            <div>
                                <p>Eseguire lincasso del titolo</p>
                                <SwitchButton isSummary={true} value={props.formik.values.Riepilogo.collectedTitle} onChange={props.formik.handleChange} inputTextId="Riepilogo.collectedTitle" name="Riepilogo.collectedTitle" btnText=""  {...props} id={1} width={70} label="" onColor="#0C87C8" offColor="#fff" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CambioFrazionamento
