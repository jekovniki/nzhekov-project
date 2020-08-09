import React from 'react'
import styles from './index.module.css'

const MainBtn = ({title}) => {
    return (
    <button className={styles[`main-btn`]}>{ title }</button>
    )
}

export default MainBtn