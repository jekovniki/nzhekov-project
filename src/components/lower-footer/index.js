import React from 'react'
import styles from './index.module.css'

const LowerFooter = () => {
//    const links = GetNavigation()
    return (
        <div className={styles[`lower-footer`]}>
            <div className={styles.wrapper}>
                <div className={styles.copyright}>
                Copyright © 2020 Nikolay Zhekov. All rights reserved.
                </div>
                <div className={styles.menu}>
                </div>
            </div>
        </div>
    )
}

export default LowerFooter