import React from 'react';
import styles from './home.module.css';
import MainWrapper from '../../components/mainWrapper'
import HomepageTeaser from '../../components/homepage-teaser'
import StandardPage from '../../components/standard-page'

const Homepage = () => {
  return (
      <MainWrapper>
        <HomepageTeaser />
        <StandardPage>
          Homepage
        </StandardPage>
      </MainWrapper>
  );
}

export default Homepage;
