import React from 'react'
import Inputs from '../../component/Inputs/inputs'
import Label from '../../component/Inputs/label'
import '../Proclotto/ProclottoAuto.scss'

export const ProclottoAuto = (props) => {
    return (
        <div className="proclotto-autovetture-Datiintegrative-container">

            <div className="proclotto-autovetture-Datiintegrative-form">
                <div className="left-input-field">

                    <div className="input-label">
                        <Label label='Descrizione Velicolo' />
                        <Inputs value={props.formik.values.supplementaryData.description} onChange={props.formik.handleChange} inputTextId="supplementaryData.description" inputTextName="supplementaryData.description" placeholder='Descrizione Velicoloa' />
                    </div>


                    <div className="input-label">
                        <Label label='Cod. Fiscale Int. Pra' />
                        <Inputs value={props.formik.values.supplementaryData.taxCode} onChange={props.formik.handleChange} inputTextId="supplementaryData.taxCode" inputTextName="supplementaryData.taxCode" placeholder='Cod. Fiscale Int. Pra' />
                    </div>


                    <div className="input-label">
                        <Label label='Comune INT. Pra' />
                        <Inputs value={props.formik.values.supplementaryData.Municipality} onChange={props.formik.handleChange} inputTextId="supplementaryData.Municipality" inputTextName="supplementaryData.Municipality" placeholder='Comune INT. Pra' />
                    </div>
                </div>


                <div className="right-input-field">
                    <div className="input-label">
                        <Label label='Targa Vecolo' />
                        <Inputs value={props.formik.values.supplementaryData.licensePlate} onChange={props.formik.handleChange} inputTextId="supplementaryData.licensePlate" inputTextName="supplementaryData.licensePlate" placeholder='Targa Vecolo' />
                    </div>
                    <div className="input-label">
                        <Label label='Nominativo INT. Pra' />
                        <Inputs value={props.formik.values.supplementaryData.nominativo} onChange={props.formik.handleChange} inputTextId="supplementaryData.nominativo" inputTextName="supplementaryData.nominativo" placeholder='Nominativo INT. Pra' />
                    </div>
                    <div className="input-label">
                        <Label label='Provincia INT. Pra' />
                        <Inputs value={props.formik.values.supplementaryData.provincia} onChange={props.formik.handleChange} inputTextId="supplementaryData.provincia" inputTextName="supplementaryData.provincia" placeholder='Provincia INT. Pra' />
                    </div>
                </div>
                {/* </div>  */}
            </div>
        </div>
    )


}

export default ProclottoAuto
