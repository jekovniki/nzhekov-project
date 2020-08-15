import React from 'react'
import styles from './index.module.css'


const Input = ({label, id, value, onChange, placeholder, ...rest}) => {
    return(
        <div>
            <label for={id}>
                {label}:
            </label>
            <input id={id} value={value} onChange={onChange} placeholder={placeholder} {...rest}/>
        </div>
    )
}

export default Input