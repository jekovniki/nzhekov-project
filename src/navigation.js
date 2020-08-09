import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Homepage from './pages/home/home'
import BlogPage from './pages/blog/blog'
import SignIn from './pages/sing-in/index'
import Error404Page from './pages/error/index'

const Navigation = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Homepage }/>
            <Route path="/blog" component={ BlogPage }/>
            <Route path="/sign-in" component={ SignIn }/>
            <Route component={ Error404Page } />
        </Switch>
        </BrowserRouter>
    )
}

export default Navigation