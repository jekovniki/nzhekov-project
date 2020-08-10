import React, { useState } from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'
import styles from './index.module.css'
import Input from '../../components/input'
import MainBtn from '../../components/main-btn'
import Title from '../../components/title'



const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80'}>
                <form className={styles[`form-container`]}>
                    <Title title="Sign In" />
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} label="Username" id="username" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" />
                    <MainBtn type="submit" title="Login" />
                </form>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignIn