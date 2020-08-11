import React from 'react'
import Title from '../title/index'
import Subtitle from '../subtitle/index'
import Footer from '../footer/index'
import styles from './index.module.css'

const StandardPage = (props, {img, headline, subheadline}) => {
    return (
        <div className={styles[`standard-page`]}>
            <div id={styles[`page-teaser`]}>
                <div className={styles.headline}>
                    <Title title={headline} />
                    <Subtitle subtitle={subheadline} />
                </div>
                <img src={img} />
            </div>
            <div id={styles.main}>
                {props.children}
            </div>
            <div id={styles[`main-footer`]}>
                <Footer />
            </div>
        </div>
    )
}

export default StandardPage