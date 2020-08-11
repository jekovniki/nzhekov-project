import React from 'react'
import styles from './index.module.css'
import Title from '../title/index'
import Subtitle from '../subtitle/index'

const PageTeaser = ({img, alt, headline, subheadline}) => {
    return (
        <div className={styles[`page-teaser`]}>
            <div className={styles[`teaser-headline`]}>
                <Title title={headline} />
                <Subtitle subtitle={subheadline} />
            </div>
            <img src={img} alt={alt} />
        </div>
    )
}

export default PageTeaser