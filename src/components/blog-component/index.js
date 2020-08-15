import React from 'react'
import styles from './index.module.css'
import Subtitle from '../subtitle/index'

const BlogComponent = ({title, body, tag, img}) => {
    return (
        <div className={styles[`blog-component`]}>
            <div className={styles[`blog-image`]}>
                <img src={img} />
            </div>
            <div className={styles[`blog-content`]}>
                <Subtitle subtitle={title} />
                <div className={styles.content}>
                    <p>{body}</p>
                </div>
                <div className={styles.tag}>
                    <p>
                        <strong>
                            Speciality:
                        </strong> 
                        {tag}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
