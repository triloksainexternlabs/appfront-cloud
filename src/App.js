import { useEffect } from "react";
import './App.scss';
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

function App() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'     
    })
  }

  // useEffect(()=>{
  //   document.addEventListener('scroll', function(e){
  //     const scrollTop =  window.pageYOffset || document.documentElement.scrollTop; 
  //     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  //     // window.onscroll = () { 
  //       console.log("e",e)
  //       window.scrollTo({top: 0}); 
  //   // }; 
  //   })
  // }, [])
   

    // if any scroll is attempted, 
    // set this to the previous value 
    

  return (
    <div className="app">
      <div className="app-logo">
        <img src={logos} alt="app-logo"/>
      </div>
      <div style={{position:"sticky", top:0}}>
        <div className="form-one">
          <div>
            <span className="head-text">Gruppi Prodotto</span>
          </div>
            <button className="btn-first" onClick={handleScroll}>
              Prodotto Auto
            </button>
        </div>
        <div className="form-two">
          <div className="head-text">Elenco Prodotti</div>
          <div className="form-two-content" >
            <div><img src={Autovetture} alt="Autovetture"/>Autovetture</div>
            <div><img src={Motocicu} alt="Motocicu"/>Motocicu</div>
            <div><img src={Ciclomotori} alt="Ciclomotori"/>Ciclomotori</div>
            <div><img src={Motocarri} alt="Motocarri"/>Motocarri</div>
            <div><img src={Rimorchi} alt="Rimorchi"/>Rimorchi</div>
            <div><img src={AutocarriFinoA} alt="AutocarriFinoA"/>Autocarri Fino A 35 Q.</div> 
            <div><img src={AutocarriOltreQ} alt="AutocarriOltreQ"/>Autocarri Oltre 35 Q.</div>
            <div><img src={MacchineOperatrici} alt="MacchineOperatrici"/>Macchine Operatrici</div>
            <div><img src={AutoMotoStoriche} alt="AutoMotoStoriche"/>Auto Moto Storiche</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
