import React from 'react'
import MainWrapper from '../../components/mainWrapper'
import TwoColumnsLayout from '../../components/2col-layout'

const Error404Page = () => {
    return (
        <MainWrapper>
            <TwoColumnsLayout image={'https://img.icons8.com/bubbles/50/000000/road-closure.png'}
            headline="Error 404">
                <p>This page does not exist in the current App</p>
            </TwoColumnsLayout>
        </MainWrapper>
    );
  }
  
  export default Error404Page;
  