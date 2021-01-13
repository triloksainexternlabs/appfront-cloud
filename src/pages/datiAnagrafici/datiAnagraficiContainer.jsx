import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DatiAnagrafici from "./datiAnagrafici";
import { useFormik } from 'formik';


const DatiAnagraficiContainer = props => {
    console.log(props.formik.values.PersonalData,'type=')
    // const [sureName, setSureName] = useState('')
    // const [city, setCity] = useState('')
    // const [addresses, setAddresses] = useState('')
    // const [postalCode, setPostalCode] = useState('')
    // const [fiscalCode, setFiscalCode] = useState('')
    // const [customer, setCustomer] = useState('')
    // const [district, setDistrict] = useState('')
    // const formik = useFormik({
    //     initialValues: {
    //         sureName:'',
    //         city:'',
    //         addresses:'',
    //         postalCode:'',
    //         fiscalCode:'',
    //         customer:'',
    //         district:'',
    //     },
    //     onSubmit:a=>{
    //         console.log(a,'values')
    //     }
    //   })
    
    // const [data, setData] = useState({})

    // const onChange=(event)=>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     const newData = {
    //       ...data,
    //       [name]: value
    //     }
    //     setData(newData )
    //     console.log(data,'data')
    // }
    return (
        <div>
            <DatiAnagrafici formik={props.formik} />            
        </div>
    )
}

DatiAnagraficiContainer.propTypes = {
    
}

export default DatiAnagraficiContainer
