import React from 'react'
import Title from '../title'
import styles from './index.module.css'



const TwoColumnsLayout = ({image,headline , children}) => {
    return (
        <div className={styles.twoCol}>
            <div className={styles[`column-one`]}>
                <img src={ image } />
            </div>
            <div className={styles[`column-two`]}>
                <div className={styles.rightCol}>
                <Title title={headline} />
                </div>
            { children }
            </div>
        </div>
    )
}

export default TwoColumnsLayout