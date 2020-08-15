import React, { useState } from 'react'
import Subtitle from '../subtitle/index'
import Input from '../input/index'
import MainBtn from '../main-btn/index'
import styles from './index.module.css'
import Select from '../select/index'
import Textarea from '../textarea/index'
import { baseApiUrl} from '../../utils/consts'

const PublishBlog = () => {

    const submit = (data) => {
        debugger
        fetch(baseApiUrl + "blogs.json", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Succssesful publish')
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Something went wrong')
        }).finally (() => {
            setTitle('')
            setBody('')
        })
    }

    const handleClick = () => {
        const blogData = ({title, body, select})

        submit(blogData)
    }


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [select, setSelect] =useState('')
    console.log(select)
    return (
        <div className={styles[`blog-post`]}>
        <Subtitle subtitle="Publish Blog Post"/>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} label="Title" id="title" />
            <Textarea label="Text:" body={body} onChange={(e) => {console.log(e);setBody(e.target.value)}}/>
            <Select label="Speciality" onChange={(e) => {console.log(e);setSelect(e.target.value)}} />
            <MainBtn type="button" title="Submit" onClick={() => handleClick()}/>
        </div>
    )

}

export default PublishBlog