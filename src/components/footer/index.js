import React from 'react'
import styles from './index.module.css'
import getUsefulLinks from '../../utils/useful-links'
import getSpeciality from '../../utils/speciality'
import MenuLinks from '../menu'
import Subtitle from '../subtitle/index'

const Footer = () => {
    const links = getUsefulLinks()
    const speciality = getSpeciality()

    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles[`about-us`]}>
                    <Subtitle subtitle="About Us" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles[`our-address`]}>
                    <Subtitle subtitle="Our Address" />
                    <p>
                        45/15 New alsala Avenew Booston town, Austria
                    </p>
                    <p>
                        Phone: 84667441
                    </p>
                    <p>
                        Email: email@example.com
                    </p>
                    <p>
                        Office Time: 10AM- 5PM
                    </p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles[`useful-links`]}>
                    <Subtitle subtitle="Usefull Links" />
                    <MenuLinks links={links} />
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles[`practice-area`]}>
                    <Subtitle subtitle="Practice Area" />
                    <MenuLinks links={speciality} />
                </div>
            </div>
        </div>
    )
}

export default Footer