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



const SignInSuccess = () => {

    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80'}>
                    <Title title="Sign In Successful" />
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignInSuccess