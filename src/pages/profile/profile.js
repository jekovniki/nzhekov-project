import React from 'react';
import styles from './profile.module.css';
import MainWrapper from '../../components/mainWrapper'
import StandardPage from '../../components/standard-page'
import PublishBlog from '../../components/publish-blog'
import ComplaintsListing from '../../components/complaints-listing'
import UserProfile from '../../components/user-profile/index'


const ProfilePage = () => {
  return (
    <MainWrapper>
      <StandardPage headline="Profile" 
      subheadline="" 
      img="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80">
        <UserProfile />
        <ComplaintsListing />
        <PublishBlog />
      </StandardPage>
    </MainWrapper>
  );
}

export default ProfilePage;
