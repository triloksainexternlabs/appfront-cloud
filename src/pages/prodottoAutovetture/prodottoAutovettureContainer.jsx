import React from 'react'
import ProdottoAutovetture from "../prodottoAutovetture/prodottoAutovetture";

const ProdottoAutovettureContainer = props => {
    return (
            <ProdottoAutovetture formik={props.formik} />            
    )
}


export default ProdottoAutovettureContainer
