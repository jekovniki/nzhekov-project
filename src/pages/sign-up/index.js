import React, { useState } from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'
import styles from './index.module.css'
import Input from '../../components/input'
import MainBtn from '../../components/main-btn'
import Title from '../../components/title'
import Select from '../../components/select'



const SignUp = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [repassword, setRePassword] = useState('')



    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80'}>
                <form className={styles[`form-container`]}>
                    <Title title="Sign Up" />
                    <p>Register form for lawyers.</p>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} label="Username" id="username" />
                    <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} label="First Name" id="firstname" />
                    <Input value={lastname} onChange={(e) => setLastName(e.target.value)} label="Last Name" id="lastname" />
                    <Select label="Select speciality" id="speciality" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" />
                    <Input value={repassword} onChange={(e) => setRePassword(e.target.value)} label="Re-Password" id="repassword" />
                    <MainBtn type="submit" title="Register" />
                </form>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignUp
  