import React from 'react'
import '../riepilogoGaranzie/riepilogoGaranzie.scss'
const RiepilogoGaranzie = (props) => {

    return (
        <div className='RiepilogoGaranzie'>

            <table>
                <thead>
                    <tr id='row1'>
                        <th></th>
                        <th>Garanzia</th>
                        <th>Oggetto</th>
                        <th>Premio</th>
                        <th>Sconto</th>
                        <th>Premio Scontato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id='row2'>
                        <td>
                            <div class="checkbox-group_">
                                <input name="Warranties.value1" value={props.formik.values.Warranties.value1} onChange={props.formik.handleChange} className='input' type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>R.C. Veicoli- B/M</td>
                        <td>Autovettura/Autocarro 35Q</td>
                        <td>296,35</td>
                        <td> <input id="0" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[0] ? props.discountAward[0] : '00.00'}</td>
                    </tr>
                    <tr id='row3'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value2" value={props.formik.values.Warranties.value2} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Inc/Furto Con Scoperto</td>
                        <td>Autovettura/Autocarro 35Q</td>
                        <td>00.00</td>
                        <td> <input id="1" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[1] ? props.discountAward[1] : '00.00'}</td>
                    </tr>
                    <tr id='row4'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value3" value={props.formik.values.Warranties.value3} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Collisione</td>
                        <td>Autovettura/Autocarro 35Q</td>
                        <td>00.00</td>
                        <td> <input id="2" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input>  </td>
                        <td>{props.discountAward[2] ? props.discountAward[2] : '00.00'}</td>
                    </tr>
                    <tr id='row5'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value4" value={props.formik.values.Warranties.value4} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Esternsione Kasko</td>
                        <td>Autovettura/Autocarro 35Q</td>
                        <td>00.00</td>
                        <td><input id="3" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[3] ? props.discountAward[3] : '00.00'}</td>
                    </tr>
                    <tr id='row6'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value5" value={props.formik.values.Warranties.value5} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Cash Back</td>
                        <td>Veicoli in Genere</td>
                        <td>00.00</td>
                        <td> <input id="4" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[4] ? props.discountAward[4] : '00.00'}</td>
                    </tr>
                    <tr id='row7'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value6" value={props.formik.values.Warranties.value6} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Assistenza Base</td>
                        <td>Autovettura</td>
                        <td>00.00</td>
                        <td> <input id="5" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input>  </td>
                        <td>{props.discountAward[5] ? props.discountAward[5] : '00.00'}</td>
                    </tr>
                    <tr id='row8'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value7" value={props.formik.values.Warranties.value7} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Assistenza VIP</td>
                        <td>Autovettura</td>
                        <td>00.00</td>
                        <td> <input id="6" type="number" onBlur={props.onBlur} onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[6] ? props.discountAward[6] : '00.00'}</td>
                    </tr>
                    <tr id='row9'>
                        <td>
                            <div class="checkbox-group">
                                <input name="Warranties.value8" value={props.formik.values.Warranties.value8} onChange={props.formik.handleChange} type="checkbox" id="Veicoli" />
                                <label htmlFor="Veicoli"></label>
                            </div>
                        </td>
                        <td>Pacchet. Eventi Cristaw</td>
                        <td>Autovettura/Autocarro 35Q</td>
                        <td>00.00</td>
                        <td><input id="7" onBlur={props.onBlur} type="number" onChange={props.onChange} step="0.01" maxLength="4" placeholder='00.00' className='active'></input> </td>
                        <td>{props.discountAward[7] ? props.discountAward[7] : '00.00'}</td>
                    </tr>
                    <tr id='row10'>
                        <td></td>
                        <td><span>Premio Libero</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span>266.72</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RiepilogoGaranzie
