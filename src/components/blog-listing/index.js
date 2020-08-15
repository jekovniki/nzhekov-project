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

    const limitter = 1;

    const [allBlogs, setAllBlogs] = useState({})

    useEffect( () => {content()}, [limitter])

    return (
        <div className={styles[`blog-listing`]}>
            {
                Object.entries(allBlogs).map(
                    ([id, {title, body, select}]) => {
                        return (
                            <BlogComponent title={title} body={body} tag={select} />
                        )
                    }
                )
            }
        </div>
    )
}

export default BlogListing