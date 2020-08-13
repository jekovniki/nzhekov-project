import React from 'react'
import styles from './index.module.css'
import getLawyers from '../../utils/lawyers'

const TeamBlock = () => {
    const lawyers = getLawyers()
    return (
    <div className={styles.team}>
        {
        lawyers.map(({name, job, field, img}, index) => 
        <div className={styles[`team-member`]}>
            <div className={styles.picture}>
                <img src={img} />
            </div>
            <div className={styles.info}>
                <p><strong>Speciality:</strong><br/>{job}</p>
                <p><strong>Field of Law:</strong><br/>{field}</p>
            </div>
            <div className={styles.name}><h3>{name}</h3></div>
        </div>)
        }
        </div>
    )
}

    
export default TeamBlock