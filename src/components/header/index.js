import React from 'react'
import logo from '../../images/logo.png'
import styles from './index.module.css'
import getNavigation from '../../utils/main-navigation'
import MenuLinks from '../menu'


const Header = () => {
    const links = getNavigation()

    return(
        <div id={styles.header}>
            <div className={styles["header-logo"]}>
                <a href="/">
                    <img src={logo} className={logo} alt="logo" />
                </a>
            </div>
            <div className={styles.navigation}>
                <MenuLinks links={links} />
                </div>
            </div>
    )
}

export default Header