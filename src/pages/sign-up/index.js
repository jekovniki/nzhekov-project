import React, { useState, useCallback } from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'
import styles from './index.module.css'
import Input from '../../components/input'
import MainBtn from '../../components/main-btn'
import Title from '../../components/title'
import Select from '../../components/select'
import app from '../../base'
import { withRouter } from 'react-router-dom'
import { baseApiUrl} from '../../utils/consts'


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password} = event.target.elements;

        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/sign-up-success")
        } catch(error) {
            alert(error);
        }
    }, [history])

    const submit = (data) => {
        fetch(baseApiUrl + "user.json", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
    }

    const handleClick = () => {
        const userData = ({firstname, lastname, select, imageURL})

        submit(userData)
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [select, setSelect] =useState('')
    const [imageURL, setImage] = useState('')

 // <Input value={username} onChange={(e) => setUsername(e.target.value)} label="Username" id="username" />




    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80'}>
                <form onSubmit={handleSignUp} className={styles[`form-container`]}>
                    <Title title="Sign Up" />
                    <p>Register form for lawyers.</p>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} label="Username" id="username" />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" id="email" />
                    <Input value={imageURL} onChange={(e) => setImage(e.target.value)} label="Photo" id="image" placeholder="Place Image URL" />
                    <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} label="First Name" id="firstname" />
                    <Input value={lastname} onChange={(e) => setLastName(e.target.value)} label="Last Name" id="lastname" />
                    <Select label="Select speciality" id="speciality" onChange={(e) => {console.log(e);setSelect(e.target.value)}} />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" />
                    <MainBtn type="submit" title="Register" onClick={() => handleClick()}/>
                </form>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignUp
  