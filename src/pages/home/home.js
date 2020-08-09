import React from 'react';
import styles from './home.module.css';
import MainWrapper from '../../components/mainWrapper'
import HomepageTeaser from '../../components/homepage-teaser'

const Homepage = () => {
  return (
      <MainWrapper>
        <HomepageTeaser />
      <p>Homepage</p>
      </MainWrapper>
  );
}

export default Homepage;
