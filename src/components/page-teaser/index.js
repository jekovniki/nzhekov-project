import React from 'react'
import styles from './index.module.css'
import Title from  './title'

const PageTeaser = ({img, alt}) => {
    return (
        <div className={styles[`page-teaser`]}>
            <Title />
            <img src={img} alt={alt} />
        </div>
    )
}

export default PageTeaser