import React from 'react';
import DatiAnagrafici from "./datiAnagrafici";


const DatiAnagraficiContainer = props => {
    return (
        <div>
            <DatiAnagrafici formik={props.formik} />            
        </div>
    )
}

DatiAnagraficiContainer.propTypes = {
    
}

export default DatiAnagraficiContainer
