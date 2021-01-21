import './App.scss';
import { useState } from 'react'
import logos from './images/appLogo.svg';
import ProdottoAutovettureContainer from "./pages/prodottoAutovetture/prodottoAutovettureContainer";
import ContinueButton from "./components/continueButton";
import ElencoGaranzie from './pages/elencoGaranzie/ElencoGaranzieContainer';
import ProductListcontainer from "./pages/productList/ProductListcontainer";
import DatiAnagrafici from "./pages/datiAnagrafici/datiAnagraficiContainer";
import Questionario from "./pages/questionario/questionariocontainer";
import StampaPolizza from "./pages/StampaPolizza/StampaPolizza"
import RiepilogoGaranzieContainer from './pages/riepilogoGaranzie/RiepilogoGaranzieContainer';
import DatiContrato from "./pages/datiContratto/datiContrattoContainer";
import Progressbar from '../src/ProgressBar/progressbar'
import { useFormik } from 'formik';
import ProclottoAuto from './pages/Proclotto/ProclottoAuto';
import Attestato from './pages/Attestato/Attestato';
import { useDispatch } from 'react-redux'
import { storeUserDetails } from '../src/redux/actions'
import ReactPageScroller from 'react-page-scroller';
import RiepilogoContainer from './pages/Riepilogo/RiepilogoContainer';


function App() {
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(0)
  const dispatch = useDispatch()
  const [siNoArr, setSiNoArr] = useState([]);
  const [confirmArr, setConfirmArr] = useState([]);
  const [summaryValues, setSummaryValues] = useState([false, false]);



  const getQuestions = (arr, type) => {
    if (type === 'trueFalse') {
      let temp = [...arr]
      setSiNoArr(temp)
    }
    else {
      let temp = [...arr]
      setConfirmArr(temp)
    }
  }
  const handleScroll = (value,) => {
    setId(value)
    if (value === 1) {
      setFlag(false)
    }
    else
      if (value === 11) {
        dispatch(storeUserDetails({ data: formik.values, questionArr: [...siNoArr, ...confirmArr] }))
      }
    setFlag(true)
  }

  const formik = useFormik({
    initialValues: {
      policyPlate: '',
      PersonalData: {
        sureName: '',
        city: '',
        addresses: '',
        postalCode: '',
        fiscalCode: '',
        customer: '',
        district: '',
      },
      contractData: {
        duration: '',
        effectiveDateTime: '',
        policyExpiry: '',
        splittingUp: '',
        authorizationCode: '',
        manufacturerCode: '',
        constraintExpiry: '',
        assignmentCode: '',
        newCertificate: '',
        registrationDate: '',
        constraint: '',
        coInsurancePolicy: '',
        installmentDeadline: ''
      },
      carProduct: {
        effectiveDateAndTime: '',
        ageOfVeichle: '',
        cuenteType: '',
        vehichleCode: '',
        vehicleClassification: '',
        granziaMoneyBox: '',
        tariffProvince: ''
      },
      supplementaryData: {
        description: '',
        taxCode: '',
        Municipality: '',
        licensePlate: '',
        nominativo: '',
        provincia: ''
      },
      elencoGaranzie: {
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
        value7: false,
        value8: false,
      },
      Warranties: {
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
        value7: false,
        value8: false,
      },
      Riepilogo: {
        prodotto: '',
        dataDecorrenza: '',
        dataScadenzaPolizza: '',
        contraente: '',
        frazionamento1: '',
        frazionamento2: '',
        scadenzaRata: '',
        dataProcessing: '',
      }

    },

  })
  return (
    <div className="app" >
      <div className="app-logo">
        <img src={logos} alt="app-logo" />
      </div>
      <div id='form-container' className="step-view-container">
        <ReactPageScroller
          customPageNumber={11}
        // onBeforePageScroll={onBeforePageScroll}
        // pageOnChange={handlePageChange}
        >
          <div className="form-one">
            <div>
              <span className="head-text">Gruppi Prodotto</span>
            </div>
            <button className="btn-first" onClick={() => handleScroll(1)}>
              Prodotto Auto
            </button>
          </div>
          <div className={`form-two `}>
            <div className="headings">ELENCO PRODOTTI</div>
            <ProductListcontainer handleScroll={handleScroll} />
          </div>
          <div className={`product-list-third ElencoGaranzie  `}>
            <div className="headings">Elenco Garanzie</div>
            <ElencoGaranzie formik={formik} />
            <ContinueButton handleScroll={handleScroll} step={3} />
          </div>
          <div className={`product-list-third DatiAnagrafici`}>
            <div className="headings">Dati Anagrafici</div>
            <DatiAnagrafici formik={formik} />
            <ContinueButton handleScroll={handleScroll} step={4} />
          </div>
          <div className="product-list-third questionario daticontratto ">
            <h1 className='headings'>Questionario</h1>
            <Questionario getQuestions={getQuestions} formik={formik} />
            <ContinueButton handleScroll={handleScroll} step={5} />
          </div>
          <div className="product-list-third daticontratto ">
            <h1 className='headings'>Dati Contratto</h1>
            <DatiContrato formik={formik} />
            <ContinueButton handleScroll={handleScroll} step={6} />
          </div>
          <div className="product-list-third Attestato ">
            <div className="headings">Attestato Di Rischio</div>
            <div className='attestato-wrapper '>
              <Attestato formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={7} />
            </div>
          </div>
          <div className="product-list-third ProdottoAutovetture riepilogoGaranzie">
            <div className="headings">Prodotto Autovetture</div>
            <ProdottoAutovettureContainer formik={formik} />
            <div className='riepilogo-btn-container'>
              <ContinueButton handleScroll={handleScroll} step={8} />
              <ContinueButton handleScroll={handleScroll} step={8} />
            </div>

          </div>
          <div className="product-list-third riepilogoGaranzie">
            <h1 className="headings">Riepilogo Garanzie</h1>
            <RiepilogoGaranzieContainer formik={formik} />
            <div className='riepilogo-btn-container'>
              <ContinueButton handleScroll={handleScroll} step={9} />
              <ContinueButton handleScroll={handleScroll} step={9} />
            </div>

          </div>
          <div className="product-list-third proclotto-autovetture-Datiintegrative ">

            <div className="prodotto-heading">Prodotto Autovetture</div>
            <div className=" headings sub-heading">Dati Integrative</div>
            <ProclottoAuto formik={formik} />
            <ContinueButton handleScroll={handleScroll} step={10} />
          </div>
          <div className="product-list-third riepilogo">
            <div className="headings">Riepilogo</div>
            <RiepilogoContainer formik={formik} />
            <div className='riepilogo-btn-container'>
              <ContinueButton handleScroll={handleScroll} step={11} />
              <ContinueButton handleScroll={handleScroll} step={11} />
              <ContinueButton handleScroll={handleScroll} step={11} />
            </div>

          </div>

          <div className="product-list-third stampa-poliza ">
            <div className="headings">Stampa Polizza</div>
            <StampaPolizza handleScroll={handleScroll} step={11} />
          </div>
        </ReactPageScroller>
        <Progressbar id={id - 1} flag={flag} />
      </div>


    </div>


  );
}

export default App;