import React from 'react'
import styles from './index.module.css'
import Subtitle from '../subtitle/index'

const ComplaintsComponent = ({email, phone, body, firstname, lastname}) => {
    return (
        <div className={styles[`complaints-component`]}>
            <div className={styles[`guest-name`]}>
                <p>
                    Name: <strong>{firstname} {lastname}</strong>
                </p>
            </div>
            <div className={styles[`guest-contacts`]}>
                <div className={styles.email}>
                    E-mail: <strong>{email}</strong>
                </div>
                <div className={styles.phone}>
                    Phone: <strong>{phone}</strong>
                </div>
            </div>
            <div className={styles.content}>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default ComplaintsComponent
