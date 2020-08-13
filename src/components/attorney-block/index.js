import React from 'react'
import styles from './index.module.css'

const AttorneyBlock = () => {
    return (
        <div className={styles.attorney}>
            <div className={styles[`attorney-image`]}>
            <img src="https://img.icons8.com/bubbles/100/000000/briefcase.png"/>
            </div>
            <div className={styles[`attorney-title`]}><span>Qualified Attorneys</span></div>
            <div className={styles[`attorney-text`]}>
                <h2>Meet Our Experts</h2>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
            </div>
        </div>
    )
}

export default AttorneyBlock