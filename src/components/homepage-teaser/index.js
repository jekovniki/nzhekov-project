import React from 'react'
import styles from './index.module.css'
import MainBtn from '../main-btn'


const HomepageTeaser = () => {
    return (
        <div className={styles[`homepage-teaser`]}>
            <div className={styles[`teaser-text`]}>
                <h1>Our Independence<br/>Makes the Difference</h1>
                <p><strong>Nationally Established. Internationally Recognized</strong></p>
                <MainBtn title="Free Consultation"/>
            </div>
            <img src="https://images.unsplash.com/photo-1496144300411-8dd31ce145ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1372&q=80" alt="Frontpage Teaser Image" />
        </div>
    )
}

export default HomepageTeaser