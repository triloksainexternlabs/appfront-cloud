const ElencoGaranzie = () => {
    return ( 
        <table>
            <thead>
                <td className="input-col"></td>
                <td className="second">Garanzia</td>
                <td className="third">Oggetto</td>
            </thead>
            <tbody>
                <tr>
                    <td className="input-col">
                    <div class="form-group">
                        <input type="checkbox" id="Veicoli"/>
                        <label for="Veicoli"></label>
                    </div>
                    </td>
                    <td className="second">R.C. Veicoli- B/M</td>
                    <td className="third">Autovettura/Autocarro 35Q</td>
                </tr>
                <tr>
                    <td className="input-col">
                    <div class="form-group">
                        <input type="checkbox" id="Scoperto"/>
                        <label for="Scoperto"></label>
                    </div>
                    </td>
                    <td className="second">Inc/Furto Con Scoperto</td>
                    <td className="third">utovettura/Autocarro 35Q</td>
                </tr>
                <tr>
                    <td>
                    <div class="form-group">
                        <input type="checkbox" id="Cowsione"/>
                        <label for="Cowsione"></label>
                    </div>
                    </td>
                    <td className="second">Cowsione</td>
                    <td className="third">Autovettura/Autocarro 35Q</td>
                </tr>
                <tr>
                <td>
                    <div class="form-group">
                        <input type="checkbox" id="Kasko"/>
                        <label for="Kasko"></label>
                    </div>
                </td>
                <td className="second">Esternsione Kasko</td>
                <td className="third">Autovettura/Autocarro 35Q</td>
                </tr>
                <tr>
                    <td className="input-col" >
                    <div class="form-group">
                        <input type="checkbox" id="Back"/>
                        <label for="Back"></label>
                    </div>
                    </td>
                    <td className="second">Cash Back</td>
                    <td className="third">Veicoli in Genere</td>
                </tr>
                <tr>
                    <td className="input-col">
                    <div class="form-group">
                        <input type="checkbox" id="Base"/>
                        <label for="Base"></label>
                    </div>
                    </td>
                    <td className="second">Assistenza Base</td>
                    <td className="third">Autovettura</td>
                </tr>
                <tr>
                    <td className="input-col">
                    <div class="form-group">
                        <input type="checkbox" id="Assistenza"/>
                        <label for="Assistenza"></label>
                    </div>
                    </td>
                    <td className="second">Assistenza VIP</td>
                    <td className="third">Autovettura</td>
                </tr>
                <tr>
                <td className="input-col">
                    <div class="form-group">
                    <input type="checkbox" id="Cristaw"/>
                    <label for="Cristaw"></label>
                    </div>
                </td>
                <td className="second">Pacchet. Eventi Cristaw</td>
                <td className="third">Autovettura/Autocarro 35Q</td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default ElencoGaranzie;