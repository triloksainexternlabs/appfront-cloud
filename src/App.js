import './App.scss';
import { useState,useEffect } from 'react'
import logos from './images/appLogo.svg';
import ProdottoAutovettureContainer from "./pages/prodottoAutovetture/prodottoAutovettureContainer";
import ContinueButton from "./components/continueButton";
import ElencoGaranzie from './pages/elencoGaranzie/ElencoGaranzieContainer';
import ProductListcontainer from "./pages/productList/ProductListcontainer";
import DatiAnagrafici from "./pages/datiAnagrafici/datiAnagraficiContainer";
import Questionario from "./pages/questionario/questionariocontainer";
import StampaPolizza from "./pages/StampaPolizza/StampaPolizza"
import  RiepilogoGaranzieContainer  from './pages/riepilogoGaranzie/RiepilogoGaranzieContainer';
import DatiContrato from "./pages/datiContratto/datiContrattoContainer";
import Progressbar from '../src/ProgressBar/progressbar'
import { useFormik } from 'formik';
import ProclottoAuto from './pages/Proclotto/ProclottoAuto';
import Attestato from './pages/Attestato/Attestato';
import {useDispatch} from 'react-redux'
import {storeUserDetails} from '../src/redux/actions'

function App() {
  let n=1;
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(1)
  const dispatch = useDispatch()
  const [siNoArr, setSiNoArr] = useState([]);
  const [confirmArr, setConfirmArr] = useState([]);



  const getQuestions=(arr,type)=>{
   
    if(type==='trueFalse')
    {
      let temp=[...arr]
      setSiNoArr(temp)
    }
    else{
      let temp=[...arr]
      setConfirmArr(temp)
    }
  }
  const handleScroll = (value,) => {
    setId(value)

    window.scrollTo({
      top: window.innerHeight * value,
      behavior: 'smooth'
    })
    if (value === 1) {
      setFlag(false)

    }
    else
    if(value===11){
      dispatch(storeUserDetails({data:formik.values,questionArr:[...siNoArr,...confirmArr]}))
    }
      setFlag(true)
  }
  // const [scrollPosition, setSrollPosition] = useState(0);
const handleScrol = () => {
    const position = window.pageYOffset;
    console.log(position,'vposition')
    // setSrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScrol, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScrol);
    };
}, []);

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
    },

  })
  // let x=document.getElementsByClassName('product-list-third')
  // console.log(x,'product-list-thirdproduct-list-third')
  

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
              <ElencoGaranzie formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={3} />
            </div>
            <div className="product-list-third DatiAnagrafici">
              <DatiAnagrafici formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={4} />
            </div>
            <div className="product-list-third questionario daticontratto ">
              <Questionario getQuestions={getQuestions} formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={5} />
            </div>
            <div className="product-list-third daticontratto">
              <DatiContrato formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={6} />
            </div>
            <div className="product-list-third Attestato">
              <div className="head-text-w-underline">Attestato Di Rischio</div>
              <div className='attestato-wrapper'>
                <Attestato formik={formik} />
                <ContinueButton handleScroll={handleScroll} step={7} />
              </div>
            </div>
            <div className="product-list-third ProdottoAutovetture">
              <div className="head-text-w-underline">Prodotto Autovetture</div>
              <ProdottoAutovettureContainer formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={8} />

            </div>
            <div className="product-list-third">
              <RiepilogoGaranzieContainer formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={9} />
            </div>
            <div className="product-list-third proclotto-autovetture-Datiintegrative">
              <ProclottoAuto formik={formik} />
              <ContinueButton handleScroll={handleScroll} step={10} />
            </div>
            <div className="product-list-third stampa-poliza">
              <StampaPolizza />
              <ContinueButton handleScroll={handleScroll} step={11} />
            </div>
          </div>
          <Progressbar id={id} flag={flag} />
        </div>
      </div>


    </div>


  );
}

export default App;