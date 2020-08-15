import React from 'react';
import styles from './blog.module.css';
import MainWrapper from '../../components/mainWrapper'
import StandardPage from '../../components/standard-page'
import BlogListing from '../../components/blog-listing'


const BlogPage = (props) => {
  return (
    <MainWrapper>
      <StandardPage headline="Blog" 
      subheadline="A blog is a discussion or informational website consisting of discrete often informal diary-style text entries." 
      img="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80">
        <BlogListing />
      </StandardPage>
    </MainWrapper>
  );
}

export default BlogPage;
