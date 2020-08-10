import React from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'

const Error403Page = () => {
    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1587317028155-4f8c95c45372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80'}
            headline="Error 403">
                <p>Sorry, you don't have the permission to see this page.</p>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default Error403Page;
  