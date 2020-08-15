import React from 'react'
import styles from './index.module.css'
import SelectOptions from '../select-options/index'
import getSpeciality from '../../utils/speciality'


const Select = ({label, id,...rest}) => {
    console.log(rest)
    const options = getSpeciality()
    return(
        <div>
            <label for={id}>
                {label}:
            </label>
            <SelectOptions {...rest}  id={id} options={options} />
        </div>
    )
}

export default Select