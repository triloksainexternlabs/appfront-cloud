import './App.scss';
import logos from './images/appLogo.svg';
import ProdottoAutovettureContainer from "./pages/prodottoAutovetture/prodottoAutovettureContainer";
import ContinueButton from "./components/ContinueButton";
import ElencoGaranzie from './pages/elencoGaranzie/ElencoGaranzie';
import ProductListcontainer from "./pages/productList/ProductListcontainer";
import DatiAnagrafici from "./pages/datiAnagrafici/datiAnagraficiContainer";
import Questionario from "./pages/questionario/questionariocontainer";
import RiepilogoGaranzieContainer from './pages/riepilogoGaranzie/riepilogoGaranzieContainer';
import DatiContrato from "./pages/DatiContratto/datiContrattoContainer";

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
            <button className="btn-first" onClick={()=>handleScroll(6)}>
                Prodotto Auto
            </button>
          </div>
          <div className="form-two">
            <div className="head-text-w-underline">Elenco Prodotti</div>
            <ProductListcontainer handleScroll={handleScroll}/>
          </div>
          <div className="product-list-third">
            <div className="head-text-w-underline">Elenco Garanzie</div>
              <ElencoGaranzie/>
              <ContinueButton handleScroll={handleScroll} step={3} />
          </div>
          <div className="product-list-third">
            <DatiAnagrafici/>
            <ContinueButton handleScroll={handleScroll} step={4}/>
          </div>
          <div className="product-list-third">
            <Questionario/>
            <ContinueButton handleScroll={handleScroll} step={5}/>
          </div>
          <div className="product-list-third">
            <DatiContrato/>
            <ContinueButton handleScroll={handleScroll} step={6}/>
          </div>
          <div className="product-list-third">
            <ProdottoAutovettureContainer/>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;