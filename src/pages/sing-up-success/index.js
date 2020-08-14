import React from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'
import Title from '../../components/title'



const SignUpSuccess = () => {

    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80'}>
                    <Title title="Registration is successful" />
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default SignUpSuccess