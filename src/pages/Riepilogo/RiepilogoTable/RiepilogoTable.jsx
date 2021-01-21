import React from 'react'
import "./RiepilogoTable.scss";

const RiepilogoTable = props => {
    
    return (
        <div className="main-table">
            <div className="table-cloumn-one">
                <p></p>
                <p>Prima Rata</p>
                <p>Rate Successive</p>
            </div>
            <div className="table-cloumn">
                <p>Imponibile</p>
                <p>266,72</p>
                <p>266,72</p>
            </div>
            <div className="table-cloumn">
                <p>Di Cui Diritti</p>
                <p>44,45</p>
                <p></p>
            </div>
            <div className="table-cloumn">
                <p>Abbuono</p>
                <p>0,00</p>
                <p></p>
            </div>
            <div className="table-cloumn">
                <p>Premio Netto</p>
                <p>36.01</p>
                <p>36.01</p>
            </div>
            <div className="table-cloumn">
                <p>S.S.N.</p>
                <p>0,00</p>
                <p>0,00</p>
            </div>
            <div className="table-cloumn">
                <p>Totale</p>
                <p>302,72</p>
                <p>302,72</p>
            </div>
        </div>
    )
}

RiepilogoTable.propTypes = {

}

export default RiepilogoTable
