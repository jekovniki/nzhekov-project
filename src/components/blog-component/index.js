import React from 'react'
import styles from './index.module.css'
import Subtitle from '../subtitle/index'
import Link from '../link/index'

const BlogComponent = ({title, body, tag, img, href, date, ...rest}) => {
    return (
        <div className={styles[`blog-component`]} {...rest}>
            <div className={styles[`blog-image`]}>
                <img src={img} />
            </div>
            <div className={styles[`blog-content`]}>
            <div className={styles.tag}>
                    <p>
                        <strong>
                            Speciality:
                        </strong> 
                        {tag}
                    </p>
                </div>
                <Subtitle subtitle={title} />
                <div className={styles.content}>
                    <p>{body}</p>
                </div>
                <div>
                    <Link href={href} name="Read more"/>
                </div>
                <div className={styles.date}>
                   Date: {date}
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
