import React from 'react';
import Car from "../../images/car.svg";
import '../../scss/elencoGaranzie.scss';
const ElencoGaranzie = props => {
    let { onChange } = props
    return (
        <>
            <div className='img-view' >
                <img src={Car} alt="" />
            </div>
        <div  style={{display: 'flex',width: 'inherit',height:'80%'}}>
            <div className='elencoGaranzie-table' >
                <table>
                    <thead>
                        <td></td>
                        <td className="second">Garanzia</td>
                        <td className="third">Oggetto</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="input-col">
                                <div className="frm-group">
                                    <input name="elencoGaranzie.value1" value={props.formik.values.elencoGaranzie.value1} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}   type="checkbox" id="Veicoli"/>
                                    <label htmlFor="Veicoli"></label>
                                </div>
                            </td>
                            <td className="second">R.C. Veicoli- B/M</td>
                            <td className="third">Autovettura/Autocarro 35Q</td>
                        </tr>
                        <tr>
                            <td className="input-col">
                                <div className="frm-group">
                                    <input name="elencoGaranzie.value2" value={props.formik.values.elencoGaranzie.value2} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}   type="checkbox" id="Scoperto"/>
                                    <label htmlFor="Scoperto"></label>
                                </div>
                            </td>
                            <td className="second">Inc/Furto Con Scoperto</td>
                            <td className="third">utovettura/Autocarro 35Q</td>
                        </tr>
                        <tr>
                            <td>
                            <div className="frm-group">
                                <input name="elencoGaranzie.value3" value={props.formik.values.elencoGaranzie.value3} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}     type="checkbox" id="Cowsione"/>
                                <label htmlFor="Cowsione"></label>
                            </div>
                            </td>
                            <td className="second">Cowsione</td>
                            <td className="third">Autovettura/Autocarro 35Q</td>
                        </tr>
                        <tr>
                        <td>
                            <div className="frm-group">
                                <input name="elencoGaranzie.value4" value={props.formik.values.elencoGaranzie.value4} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}   type="checkbox" id="Kasko"/>
                                <label htmlFor="Kasko"></label>
                            </div>
                        </td>
                        <td className="second">Esternsione Kasko</td>
                        <td className="third">Autovettura/Autocarro 35Q</td>
                        </tr>
                        <tr>
                            <td className="input-col" >
                            <div className="frm-group">
                                <input name="elencoGaranzie.value5" value={props.formik.values.elencoGaranzie.value5} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}    type="checkbox" id="Back"/>
                                <label htmlFor="Back"></label>
                            </div>
                            </td>
                            <td className="second">Cash Back</td>
                            <td className="third">Veicoli in Genere</td>
                        </tr>
                        <tr>
                            <td className="input-col">
                            <div className="frm-group">
                                <input name="elencoGaranzie.value6" value={props.formik.values.elencoGaranzie.value6} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}   type="checkbox" id="Base"/>
                                <label htmlFor="Base"></label>
                            </div>
                            </td>
                            <td className="second">Assistenza Base</td>
                            <td className="third">Autovettura</td>
                        </tr>
                        <tr>
                            <td className="input-col">
                            <div className="frm-group">
                                <input name="elencoGaranzie.value7"  value={props.formik.values.elencoGaranzie.value7} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}  type="checkbox" id="Assistenza"/>
                                <label htmlFor="Assistenza"></label>
                            </div>
                            </td>
                            <td className="second">Assistenza VIP</td>
                            <td className="third">Autovettura</td>
                        </tr>
                        <tr>
                        <td className="input-col">
                            <div className="frm-group">
                            <input name="elencoGaranzie.value8" value={props.formik.values.elencoGaranzie.value8} onChange={(e)=>{props.formik.handleChange(e); onChange(e)}}  type="checkbox" id="Cristaw"/>
                            <label htmlFor="Cristaw"></label>
                            </div>
                        </td>
                        <td className="second">Pacchet. Eventi Cristaw</td>
                        <td className="third">Autovettura/Autocarro 35Q</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
       </>
    )
}

ElencoGaranzie.propTypes = {

}

export default ElencoGaranzie
