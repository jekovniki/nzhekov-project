import React, { useState } from 'react'
import Subtitle from '../subtitle/index'
import Input from '../input/index'
import MainBtn from '../main-btn/index'
import styles from './index.module.css'
import Select from '../select/index'
import Textarea from '../textarea/index'
import { baseApiUrl} from '../../utils/consts'

const SendComplaint = () => {

    const submit = (data) => {
        fetch(baseApiUrl + "complaints.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Complaint is sent!')
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
        const blogData = ({title, body})

        submit(blogData)
    }


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    return (
        <form className={styles.complaint}>
            <Subtitle subtitle="Tell us about your issue"/>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} label="Title" id="title" />
            <Textarea label="Text:" body={body} onChange={(e) => {console.log(e);setBody(e.target.value)}}/>
            <MainBtn type="button" title="Send" onClick={() => handleClick()}/>
        </form>
    )

}

export default SendComplaint