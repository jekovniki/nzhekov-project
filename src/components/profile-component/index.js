import React from 'react'
import styles from './index.module.css'

const ProfileComponent = ({imageURL, firstname, lastname, select}) => {
    return (
        <div className={styles.profile}>
            <div className={styles[`profile-picture`]}>
                <div className={styles.picture}>
                    <img src={imageURL} />
               </div>
            </div>
            <div className={styles[`profile-data`]}>
                <div className={styles.data}>
                    <p>First Name: <strong>{firstname}</strong></p>
                    <p>Last Name: <strong>{lastname}</strong></p>
                    <p>Speciality: <strong>{select}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
