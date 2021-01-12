import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import "../Inputs/inputs.scss";

const Inputs = props => {
    return (
        <div>
            <div className="main-part">
                    <Input 
                        className="input-tag"
                        placeholder={props.placeholder} 
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </div>
        </div>
    )
}

Inputs.propTypes = {

}

export default Inputs
