import React from 'react'

const SelectOptions = ({options, ...rest}) => {
    return (
        <select {...rest}>
        {
        options.map(({name,value}) => <option value={value}>{name}</option>)
        }
        </select>
    )
}

    
export default SelectOptions