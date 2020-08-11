import React from 'react'
import styles from './index.module.css'

const Subtitle = ({subtitle}) => {
    return (
        <h3 className={styles.subtitle}> {subtitle} </h3>
    )
}

export default Subtitle