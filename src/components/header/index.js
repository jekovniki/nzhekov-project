import React from 'react'
import logo from '../../images/logo.png'
import styles from './index.module.css'
import getNavigation from '../../utils/main-navigation'
import getUserNav from '../../utils/user-main-navigation'
import MenuLinks from '../menu'
import app from '../../base'
import * as firebase from 'firebase'


const Header = () => {
    const links = getNavigation()
    const userNav = getUserNav()

    const user = firebase.auth().currentUser;
    if (user) {
        return (
            <div id={styles.header}>
            <div className={styles["header-logo"]}>
                <a href="/">
                    <img src={logo} className={logo} alt="logo" />
                </a>
            </div>
            <div className={styles.navigation}>
                <MenuLinks links={userNav} />
                <nav>
                    <li>
                        <a onClick={() => app.auth().signOut()}>Sign out</a>
                    </li>
                </nav>
                </div>
            </div>
        )
    }

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