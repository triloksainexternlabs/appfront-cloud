import './App.scss';
import { useState, useEffect } from 'react'
import logos from './images/appLogo.svg';
import ProdottoAutovettureContainer from "./pages/prodottoAutovetture/prodottoAutovettureContainer";
import ContinueButton from "./components/continueButton";
import ElencoGaranzie from './pages/elencoGaranzie/ElencoGaranzieContainer';
import ProductListcontainer from "./pages/productList/ProductListcontainer";
import DatiAnagrafici from "./pages/datiAnagrafici/datiAnagraficiContainer";
import Questionario from "./pages/questionario/questionariocontainer";
import StampaPolizza from "./pages/StampaPolizza/StampaPolizza"
import RiepilogoGaranzie from './pages/riepilogoGaranzie/RiepilogoGaranzieContainer';
import DatiContrato from "./pages/datiContratto/datiContrattoContainer";
import Progressbar from '../src/ProgressBar/progressbar'
import { useFormik } from 'formik';

function App() {
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(1)
  const handleScroll = (value) => {
    const hieght = window.innerHeigh;
    setId(value)

    window.scrollTo({
      top: window.innerHeight * value,
      behavior: 'smooth'
    })
    if (value === 1) {
      setFlag(false)

    }
    else
      setFlag(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      console.log(window.innerHeight, 'event hora h')
    })
    return () => {
      window.removeEventListener('scroll', (e) => {
        console.log(e, 'removeListner')
      })
    }
  }, [id])
  // if(true)
  // {
  //   return (
  //     <DatiContrato />
  //   )
  // }
  const formik = useFormik({
    initialValues: {
      productName: "",
      gaurantee: [],
      cognomeName: "",
      indirizzi: "",
      citta: "",
      cap: "",
      codiceFiscale: "",
      codiaceCliente: "",
      provincia: "",
      ddpdvCognomeName: "",
      ddpdvIndirizzi: "",
      ddpdvCitta: "",
      ddpdvCodiceFiscale: "",
      ddpdvCodiaceCliente: "",
      ddpdvProvincia: ""
    },
    onSubmit: values => {
      console.log("form submitted")
    }
  })

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
         
        </div>
        <div className='product-container'>
          <div className='product-list'>
            <div className="product-list-third ElencoGaranzie">
              <div className="head-text-w-underline">Elenco Garanzie</div>
              <ElencoGaranzie />
              <ContinueButton handleScroll={handleScroll} step={3} />
            </div>
            <div className="product-list-third DatiAnagrafici">
              <DatiAnagrafici />
              <ContinueButton handleScroll={handleScroll} step={4} />
            </div>
            <div className="product-list-third questionario daticontratto">
              <Questionario />
              <ContinueButton handleScroll={handleScroll} step={5} />
            </div>
            <div className="product-list-third daticontratto">
              <DatiContrato />
              <ContinueButton handleScroll={handleScroll} step={6} />
            </div>
            <div className="product-list-third ProdottoAutovetture">
              <div className="head-text-w-underline">Prodotto Autovetture</div>
              <ProdottoAutovettureContainer />
              <ContinueButton handleScroll={handleScroll} step={7} />

            </div>
            <div className="product-list-third">
              <RiepilogoGaranzie />
              <ContinueButton handleScroll={handleScroll} step={8} />
            </div>
            <div className="product-list-third stampa-poliza">
            <StampaPolizza />
            <ContinueButton handleScroll={handleScroll} step={8} />
          </div>s
          </div>

          <Progressbar id={id} flag={flag} />
        </div>
      </div>
    </div>

  );
}

export default App;