import React from 'react'
import styles from './index.module.css'
import SelectOptions from '../select-options/index'
import getSpeciality from '../../utils/speciality'


const Select = ({label, id}) => {
    const options = getSpeciality()
    return(
        <div>
            <label for={id}>
                {label}:
            </label>
            <SelectOptions id={id} options={options} />
        </div>
    )
}

export default Select