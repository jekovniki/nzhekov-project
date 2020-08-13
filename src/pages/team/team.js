import React from 'react';
import styles from './team.module.css';
import MainWrapper from '../../components/mainWrapper'
import StandardPage from '../../components/standard-page'
import AttorneyBlock from '../../components/attorney-block'
import TeamBlock from '../../components/team'


const TeamPage = () => {
  return (
    <MainWrapper>
      <StandardPage headline="Team" 
img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
        <AttorneyBlock />
        <TeamBlock />
      </StandardPage>
    </MainWrapper>
  );
}

export default TeamPage;
