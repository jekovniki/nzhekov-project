import React from 'react'
import styles from './index.module.css'

const MainBtn = ({title, type, ...rest}) => {
    return (
    <button {...rest} className={styles[`main-btn`]} type={type} >{ title }</button>
    )
}

export default MainBtn