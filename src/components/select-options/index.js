import React from 'react'

const SelectOptions = ({options}) => {
    return (
        <select>
        {
        options.map(({name,value}) => <option value={value}>{name}</option>)
        }
        </select>
    )
}

    
export default SelectOptions