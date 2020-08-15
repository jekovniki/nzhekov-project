import React, { useState } from 'react'
import SectionTitle from '../section-title/index'
import Input from '../input/index'
import MainBtn from '../main-btn/index'
import styles from './index.module.css'
import Select from '../select/index'
import Textarea from '../textarea/index'
import { baseApiUrl} from '../../utils/consts'

const PublishBlog = () => {

    const submit = (data) => {
        fetch(baseApiUrl + "blogs.json", {
            method: 'POST',
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
            setImage('')
        })
    }

    const handleClick = () => {
        const currentDate = new Date()
        const blogData = ({title, body, select, imageURL, currentDate})
        submit(blogData)
    }


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [select, setSelect] =useState('')
    const [imageURL, setImage] = useState('')

    return (
        <form className={styles[`blog-post`]}>
            <SectionTitle section="Publish Blog Post" />
            <Input value={title} onChange={(e) => setTitle(e.target.value)} label="Title" id="title" />
            <Input value={imageURL} onChange={(e) => setImage(e.target.value)} label="Image" id="image" placeholder="Place Image URL" />
            <Textarea label="Text:" body={body} onChange={(e) => {console.log(e);setBody(e.target.value)}}/>
            <Select label="Speciality" onChange={(e) => {console.log(e);setSelect(e.target.value)}} />
            <MainBtn type="button" title="Submit" onClick={() => handleClick()}/>
        </form>
    )

}

export default PublishBlog