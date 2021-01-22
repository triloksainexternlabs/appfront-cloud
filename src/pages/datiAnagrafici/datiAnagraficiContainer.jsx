import React from 'react';
import DatiAnagrafici from "./datiAnagrafici";


const DatiAnagraficiContainer = props => {
    return (
            <DatiAnagrafici formik={props.formik} />            
    )
}

DatiAnagraficiContainer.propTypes = {
    
}

export default DatiAnagraficiContainer
