import React from 'react'
import styles from './index.module.css'

const SectionTitle = ({section}) => {
    return (
        <h2 className={styles[`section-title`]}> {section} </h2>
    )
}

export default SectionTitle