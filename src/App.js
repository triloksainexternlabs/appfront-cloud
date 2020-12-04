import { useEffect } from "react";
import './App.css';
import logos from './images/appLogo.svg';
import AutoMotoStoriche from './images/Auto Moto Storiche.svg'
import AutocarriFinoA from './images/Autocarri Fino A 35 Q.svg';
import Motocicu from './images/Motocicu.svg';
import AutocarriOltreQ from './images/Autocarri Oltre 35 Q..svg';
import Autovetture from './images/Autovetture.svg';
import Ciclomotori from './images/Ciclomotori.svg';
import MacchineOperatrici from './images/Macchine Operatrici.svg';
import Motocarri from './images/Motocarri.svg';
import Rimorchi from './images/Rimorchi.svg';

import ProductComponent from './components/ProductComponent';

const ProductList = [
  {text : "Autovetture", imageUrl: Autovetture},
  {text : "Motocicu", imageUrl: Motocicu},
  {text : "Ciclomotori", imageUrl: Ciclomotori},
  {text : "Motocarri", imageUrl: Motocarri},
  {text : "Rimorchi", imageUrl: Rimorchi},
  {text : "Autocarri Fino A 35 Q", imageUrl: AutocarriFinoA},
  {text : "Autocarri Oltre 35 Q.", imageUrl: AutocarriOltreQ},
  {text : "Macchine Operatrici", imageUrl: MacchineOperatrici},
  {text : "Auto Moto Storiche", imageUrl: AutoMotoStoriche},
]

function App() {

  const handleScroll = (value) => {
    window.scrollTo({
      top: window.innerHeight * value,
      behavior: 'smooth'     
    })
  }

  return (
    <div className="app">
      <div className="app-logo">
        <img src={logos} alt="app-logo"/>
      </div>
      <div className="step-view-container">
      <div>
        <div className="form-one">
          <div>
            <span className="head-text">Gruppi Prodotto</span>
          </div>
          <button className="btn-first" onClick={()=>handleScroll(1)}>
            Prodotto Auto
          </button>
        </div>
        <div className="form-two">
          <div className="head-text-w-underline">Elenco Prodotti</div>
          <div className="form-two-content" >
            {
              ProductList.map((value)=>
                <ProductComponent imgUrl = {value.imageUrl} text = {value.text} handleScroll = {handleScroll} />
              )
            }
          </div>
        </div>
        <div className="product-list-third">
            <div className="head-text-w-underline">Elenco Garanzie</div>
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
            <button className="btn">Prosegui</button>
            </div>
        </div>
        </div>
       </div>
  );
}

export default App;