import React from 'react'
import '../riepilogoGaranzie/riepilogoGaranzie.scss'
const RiepilogoGaranzie = () => {
    return (
        <div className='RiepilogoGaranzie'>
            <h1>Riepilogo Garanzie</h1>
            <table>
                <tr id='row1'>
                    <th></th>
                    <th>Garanzia</th>
                    <th>Oggetto</th>
                    <th>Premio</th>
                    <th>Sconto</th>
                    <th>Premio Scontato</th>
                </tr>
               <tbody>
                <tr id='row2'>
                    <td>
                        <div class="checkbox-group">
                            <input className='input' type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>R.C. Veicoli- B/M</td>
                    <td>Autovettura/Autocarro 35Q</td>
                    <td>296,35</td>
                    <td> <span className='active'>10.00</span> </td>
                    <td>266.72</td>
                </tr>
                <tr id='row3'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Inc/Furto Con Scoperto</td>
                    <td>Autovettura/Autocarro 35Q</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>0.00</td>
                </tr>
                <tr id='row4'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Collisione</td>
                    <td>Autovettura/Autocarro 35Q</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr>
                <tr id='row5'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Esternsione Kasko</td>
                    <td>Autovettura/Autocarro 35Q</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr>
                 <tr id='row6'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Cash Back</td>
                    <td>Veicoli in Genere</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr>
                 <tr id='row7'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Assistenza Base</td>
                    <td>Autovettura</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr>
                 <tr id='row8'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Assistenza VIP</td>
                    <td>Autovettura</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr> 
                <tr id='row9'>
                    <td>
                        <div class="checkbox-group">
                            <input type="checkbox" id="Veicoli" />
                            <label for="Veicoli"></label>
                        </div>
                    </td>
                    <td>Pacchet. Eventi Cristaw</td>
                    <td>Autovettura/Autocarro 35Q</td>
                    <td>00.00</td>
                    <td> <span>00.00</span> </td>
                    <td>00.00</td>
                </tr> 
                <tr id='row10'>
                    <td></td>
                    <td><span>Totala</span></td>
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
