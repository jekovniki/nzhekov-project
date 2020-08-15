import React from 'react';
import styles from './home.module.css';
import MainWrapper from '../../components/mainWrapper'
import HomepageTeaser from '../../components/homepage-teaser'
import filterLawyers from '../../components/lawyers-filter'
import Footer from '../../components/footer'
import GoogleMap from '../../components/GoogleMap'
import SendComplaint from '../../components/send-complaint'

const Homepage = () => {
  return (
      <MainWrapper>
        <HomepageTeaser />
        <SendComplaint />
        <GoogleMap />
        <Footer />
      </MainWrapper>
  );
}

export default Homepage;
