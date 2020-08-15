import React from 'react'
import styles from './index.module.css'


const Input = ({label, id, value, onChange, placeholder}) => {
    return(
        <div>
            <label for={id}>
                {label}:
            </label>
            <input id={id} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default Input