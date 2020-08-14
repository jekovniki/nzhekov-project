import React from 'react'
import styles from './index.module.css'
import getServices from '../../utils/services'

const ServicesComponent = () => {
    const service = getServices()
    return (
    <div className={styles.services}>
        {
        service.map(({title, img, headline, body}) => 
        <div className={styles.service}>
            <div className={styles.picture}>
                <img src={img} />
                <h3>{title}</h3>
            </div>
            <div className={styles.description}>
                <h2>{headline}</h2>
                <p>{body}</p>
            </div>
        </div>)
        }
        </div>
    )
}

    
export default ServicesComponent