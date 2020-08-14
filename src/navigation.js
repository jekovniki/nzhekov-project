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
import SignUp from './pages/sign-up/index'
import TeamPage from './pages/team/team'
import ServicesPage from './pages/services/services'
import Error403Page from './pages/access-denied/index'
import ProfilePage from './pages/profile/profile'
import { AuthProvider } from './Auth'
import PrivateRoute from "./PrivateRoute"


const Navigation = () => {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ Homepage }/>
                    <Route path="/team" component={ TeamPage }/>
                    <PrivateRoute path="/profile" component={ ProfilePage }/>
                    <Route path="/blog" component={ BlogPage }/>
                    <Route path="/services" component={ ServicesPage }/>
                    <Route path="/sign-in" component={ SignIn }/>
                    <Route path="/sign-up" component={ SignUp }/>
                    <Route path="/error-403" component={ Error403Page }/>
                    <Route component={ Error404Page } />
                </Switch>
            </BrowserRouter>
        </AuthProvider>

    )
}

export default Navigation