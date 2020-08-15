import React, {useState, useEffect} from 'react';
import styles from './blog-article.module.css';
import MainWrapper from '../../components/mainWrapper'
import StandardPage from '../../components/standard-page'
import { baseApiUrl} from '../../utils/consts'


const BlogArticlePage = ({history, match}) => {

  const content = () => {
    fetch(baseApiUrl + "blogs/" + match.params.blogid + ".json", {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then((data) => {setCurrentBlog(data); console.log((data))})
}
const [currentBlog, setCurrentBlog] = useState({})

useEffect( () => {content()}, [])

console.log(currentBlog)
  return (
    <MainWrapper>
      <StandardPage headline={currentBlog.title}
      img={currentBlog.imageURL}>
        <div className={styles.article}>
        {currentBlog.body}
        </div>
      </StandardPage>
    </MainWrapper>
  );
}

export default BlogArticlePage;
