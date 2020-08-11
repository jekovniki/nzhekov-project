import React from 'react'
import Footer from '../footer/index'
import PageTeaser from '../page-teaser/index'
import styles from './index.module.css'

const StandardPage = ({img, headline, subheadline, children}) => {
    return (
        <div className={styles[`standard-page`]}>
            <PageTeaser img={img} headline={headline} subheadline={subheadline} />
            <div id={styles.main}>
                {children}
            </div>
            <div id={styles[`main-footer`]}>
                <Footer />
            </div>
        </div>
    )
}

export default StandardPage