import React from 'react'
import styles from './index.module.css'
import Header from '../header'
import LowerFooter from '../lower-footer'

const MainWrapper = (props) => {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.contaienr}>
                { props.children }
            </div>
            <LowerFooter />
        </div>
    )
} 

export default MainWrapper