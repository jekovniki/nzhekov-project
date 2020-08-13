import React from 'react';
import styles from './home.module.css';
import MainWrapper from '../../components/mainWrapper'
import HomepageTeaser from '../../components/homepage-teaser'
import filterLawyers from '../../components/lawyers-filter'
import Footer from '../../components/footer'

const Homepage = () => {
  return (
      <MainWrapper>
        <HomepageTeaser />
        Homepage
        <Footer />
      </MainWrapper>
  );
}

export default Homepage;
