import React from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/twoCol-layout'

const Error404Page = () => {
    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'}
            headline="Error 404">
                <p>This page does not exist in the current App</p>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default Error404Page;
  