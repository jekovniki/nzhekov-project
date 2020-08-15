import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import app from '../../base'
import { AuthContext } from '../../Auth'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'
import styles from './index.module.css'
import Input from '../../components/input'
import MainBtn from '../../components/main-btn'
import Title from '../../components/title'



const SignIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                history.push("/sign-in-success")
            } catch (error) {
                alert(error)
            }
        }, 
        [history]
    )
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null);

    if (currentUser) {
        return <Redirect to="/sign-in-success" />
    }

    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80'}>
                <form className={styles[`form-container`]} onSubmit={handleLogin}>
                    <Title title="Sign In" />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" id="email" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" type="password" />
                    <MainBtn type="submit" title="Login" />
                </form>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignIn