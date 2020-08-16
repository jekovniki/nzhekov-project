import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import BlogComponent from '../blog-component/index'
import MainBtn from '../main-btn/index'
import Subtitle from '../subtitle/index'
import { baseApiUrl} from '../../utils/consts'

const BlogHomepage = () => {
    const content = () => {
        fetch(baseApiUrl + "blogs.json", {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((data) => {setAllBlogs(data); console.log(Object.entries(data))})
    }

    const [allBlogs, setAllBlogs] = useState({})

    useEffect( () => {content()}, [])

    return (
        <div className={styles[`blog-homepage`]}>
            <div className={styles.blog}>
                <div className={styles[`small-title`]}>
                    <p>LATEST BLOG</p>
                </div>
                <div className={styles[`headline`]}>
                    <Subtitle subtitle="Check Our Latest Tips and News" />
                </div>
                <div className={styles.body}>
                    <p>
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt showed a lady fitted
                    </p>
                </div>
            </div>
            {
                Object.entries(allBlogs).map(
                    ([id, {title, body, select, imageURL, currentDate}]) => {
                        return (
                            <BlogComponent className={styles[`homepage-blog`]} title={title} body={body.slice(0, 220)} tag={select} img={imageURL} href={`blog/${id}`} date={currentDate} />
                        )
                    }
                ).reverse()
            }
        </div>
    )
}

export default BlogHomepage