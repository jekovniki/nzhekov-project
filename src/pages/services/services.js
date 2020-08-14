import React from 'react';
import styles from './services.module.css';
import MainWrapper from '../../components/mainWrapper'
import StandardPage from '../../components/standard-page'
import ServicesComponent from '../../components/services-component'



const ServicesPage = () => {
  return (
    <MainWrapper>
      <StandardPage headline="Services" 
      subheadline="" 
      img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
        <ServicesComponent />
      </StandardPage>
    </MainWrapper>
  );
}

export default ServicesPage;
