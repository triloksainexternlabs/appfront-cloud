import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DatiAnagrafici from "./datiAnagrafici";
import { useFormik } from 'formik';

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
    
//   })

const DatiAnagraficiContainer = props => {
    // const [sureName, setSureName] = useState('')
    // const [city, setCity] = useState('')
    // const [addresses, setAddresses] = useState('')
    // const [postalCode, setPostalCode] = useState('')
    // const [fiscalCode, setFiscalCode] = useState('')
    // const [customer, setCustomer] = useState('')
    // const [district, setDistrict] = useState('')
    const [data, setData] = useState({})

    const onChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        const newData = {
          ...data,
          [name]: value
        }
        setData(newData )
        console.log(data,'data')
    }
    return (
        <div>
            <DatiAnagrafici onChange={onChange}/>            
        </div>
    )
}

DatiAnagraficiContainer.propTypes = {
    
}

export default DatiAnagraficiContainer
