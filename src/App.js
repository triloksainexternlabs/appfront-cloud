import './App.scss';
import {useState,useEffect} from 'react'
import logos from './images/appLogo.svg';
import ContinueButton from "./components/ContinueButton";
import ElencoGaranzie from './pages/elencoGaranzie/ElencoGaranzie';
import ProductListcontainer from "./pages/productList/ProductListcontainer";
import DatiAnagrafici from "./pages/datiAnagrafici/datiAnagraficiContainer";
import Questionario from "./pages/questionario/questionariocontainer";
import RiepilogoGaranzieContainer from './pages/riepilogoGaranzie/riepilogoGaranzieContainer';
import DatiContrato from "./pages/DatiContratto/datiContrattoContainer";
import Progressbar from '../src/ProgressBar/progressbar'
function App() {
const [flag, setFlag] = useState(false);
const [id, setId] = useState(1)
  const handleScroll = (value) => {
    const hieght=window.innerHeigh;
    setId(value)
    console.log(window.innerHeight,'event hora h')
    window.scrollTo({
      top: window.innerHeight * value,
      behavior: 'smooth'
    })
    if (value === 1){
      setFlag(false) 

    }
    else
      setFlag(true)
  }

  useEffect(() => {
    window.addEventListener('scroll',(event)=>{
      console.log(window.innerHeight,'event hora h')
    })
    return () => {
      window.removeEventListener('scroll',(e)=>{
        console.log(e,'removeListner')
      })
    }
  }, [id])
  // if(true)
  // {
  //   return (
  //     <DatiContrato />
  //   )
  // }

  return (
    <div className="app">
      <div className="app-logo">
        <img src={logos} alt="app-logo" />
      </div>
      <div className="step-view-container">
        <div>
          <div className="form-one">
            <div>
              <span className="head-text">Gruppi Prodotto</span>
            </div>
            <button className="btn-first" onClick={() => handleScroll(1)}>
              Prodotto Auto
            </button>
          </div>
          <div className="form-two">
            <div className="head-text-w-underline">Elenco Prodotti</div>
            <ProductListcontainer handleScroll={handleScroll} />
          </div>
          <div className='product-container'>
            <div className='product-list'>
          <div className="product-list-third">
            <div className="head-text-w-underline">Elenco Garanzie</div>
              <ElencoGaranzie />
            <ContinueButton handleScroll={handleScroll} step={3} />
          </div>
          <div className="product-list-third">
            <DatiAnagrafici />
            <ContinueButton handleScroll={handleScroll} step={4} />
          </div>
          <div className="product-list-third">
            <Questionario />
            <ContinueButton handleScroll={handleScroll} step={5} />
          </div>
          <div className="product-list-third">
            <DatiContrato />
            <ContinueButton handleScroll={handleScroll} step={6} />
          </div>
          </div>
          <Progressbar id={id} flag={flag} />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;