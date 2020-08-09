import React from 'react'
import logo from '../../images/logo.png'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Header = () => {
    const links = getNavigation()

    return(
        <div className={styles.header}>
            <div className={styles["header-logo"]}>
                <a href="/">
                    <img src={logo} className={logo} alt="logo" />
                </a>
            </div>
            <div className={styles.navigation}>
                <nav>
                    {
                    links.map(navLink => {
                        return (
                        <Link key={navLink.title} href={navLink.link} name={navLink.title} />
                        )
                    })
                    }
                    </nav>
                    </div>
        </div>
    )
}

export default Header