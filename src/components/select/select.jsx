import React from 'react'
import Select from '@material-ui/core/Select';
import './select.scss';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const SelectField = (props) => {
    let {value,onChange,inputTextName} =props
    return (
        <div className='select-container'>
            <FormControl >
                <InputLabel htmlFor="age-native-simple">{props.name}</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: inputTextName,
                        id: `${inputTextName}`,
                    }}
                    value={value}
                    onChange={onChange}
                    inputTextName={inputTextName}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectField
