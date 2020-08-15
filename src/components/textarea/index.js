import React from 'react'
import styles from './index.module.css'

const Textarea = ({label, body, onChange, ...rest}) => {
    return (
        <div className={styles.textarea}>
            <label>{label}</label>
            <textarea {...rest} value={body} onChange={onChange} />
        </div>
    )
}

export default Textarea