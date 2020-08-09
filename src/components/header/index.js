import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Header = () => {
    const links = getNavigation()

    return(
        <nav className={styles.navigation}>
            {
            links.map(navLink => {
                return (
                    <Link key={navLink.title} href={navLink.link} name={navLink.title} />
                )
            })
            }
        </nav>
    )
}

export default Header