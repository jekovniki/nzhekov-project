import React from 'react'
import styles from '../2col-layout/index.module.css'
import Title from '../title'


const TwoColumnsLayout = ({image,headline , children}) => {
    console.log(styles)
    return (
        <div className={styles.twoCol}>
            <div className={styles[`column-one`]}>
                <img src={ image } />
            </div>
            <div className={styles[`column-two`]}>
                <Title title={headline} />
            { children }
            </div>
        </div>
    )
}

export default TwoColumnsLayout