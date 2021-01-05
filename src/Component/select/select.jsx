import React from 'react'
import Select from '@material-ui/core/Select';
import '../select/select.scss';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const SelectField = () => {
    return (
        <div className='select-container'>
            <FormControl >
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                    native
                  
                    inputProps={{
                        name: 'gfhfhf',
                        id: 'age-native-simple',
                    }}
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
