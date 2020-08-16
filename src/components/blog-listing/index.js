import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import BlogComponent from '../blog-component/index'
import { baseApiUrl} from '../../utils/consts'

const BlogListing = () => {
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
        <div className={styles[`blog-listing`]}>
            {
                Object.entries(allBlogs).map(
                    ([id, {title, body, select, imageURL, currentDate}]) => {
                        return (
                            <BlogComponent title={title} body={body.slice(0, 418)} tag={select} img={imageURL} href={`blog/${id}`} date={currentDate} />
                        )
                    }
                ).reverse()
            }
        </div>
    )
}

export default BlogListing