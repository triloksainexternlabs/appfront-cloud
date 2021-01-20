import React from 'react'
import PropTypes from 'prop-types'
import RiepilogoTable from "./RiepilogoTable";

const RiepilogoTableContainer = props => {
    return (
        <div className='riepilogi-table'>
            <RiepilogoTable/>
        </div>
    )
}

RiepilogoTableContainer.propTypes = {

}

export default RiepilogoTableContainer
