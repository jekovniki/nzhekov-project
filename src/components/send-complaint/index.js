import React, { useState } from 'react'
import SectionTitle from '../section-title/index'
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
            setFirstName('')
            setBody('')
        })
    }

    const handleClick = () => {
        const blogData = ({firstName, lastName, email, phone, body})

        submit(blogData)
    }


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [body, setBody] = useState('')
    return (
        <form className={styles.complaint}>
            <SectionTitle section="Tell us about your issue"/>
            <div className={styles.row}>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" id="firstName" />
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" id="lastName" /></div>
            <div className={styles.row}>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" />
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" id="phone" />
            </div>
            <Textarea placeholder="Case Description..." label="Text:" body={body} onChange={(e) => {console.log(e);setBody(e.target.value)}}/>
            <MainBtn type="button" title="Send" onClick={() => handleClick()}/>
        </form>
    )

}

export default SendComplaint