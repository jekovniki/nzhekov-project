import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Homepage from './pages/home/home'
import BlogPage from './pages/blog/blog'

const Navigation = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Homepage }/>
            <Route path="/blog" exact component={ BlogPage }/>

        </Switch>
        </BrowserRouter>
    )
}

export default Navigation