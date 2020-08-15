import React from 'react'
import styles from './index.module.css'
import Subtitle from '../subtitle/index'

const ComplaintsComponent = ({title, body, tag}) => {
    return (
        <div className={styles[`complaints-component`]}>
            <Subtitle subtitle={title} />
            <div className={styles.content}>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default ComplaintsComponent
