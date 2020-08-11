import React from 'react'
import styles from './index.module.css'
import getUsefulLinks from '../../utils/useful-links'
import MenuLinks from '../menu'

const LowerFooter = () => {
    const links = getUsefulLinks()
    return (
        <div className={styles[`lower-footer`]}>
            <div className={styles.wrapper}>
                <div className={styles.copyright}>
                    Copyright © 2020 Nikolay Zhekov. All rights reserved.
                </div>
                <div className={styles[`useful-links`]}>
                <MenuLinks links={links} />
                </div>
            </div>
        </div>
    )
}

export default LowerFooter