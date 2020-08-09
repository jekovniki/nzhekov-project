import React from 'react'
import styles from './index.module.css'
import Header from '../header'
import LowerFooter from '../lower-footer'

const MainWrapper = (props) => {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.container}>
                { props.children }
            </div>
            <div className={styles.footer}>
                <LowerFooter />
            </div>
        </div>
    )
} 

export default MainWrapper