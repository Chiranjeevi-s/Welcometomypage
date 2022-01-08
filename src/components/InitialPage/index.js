import React from 'react'
import WelcomePage from '../WelcomePage'
import RegisterPage from '../RegisterPage'
import './initialPage.css'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LogInPage from '../LogInPage'
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
// import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

const InitialPage = () => {
    return (
        <div className='App-header'>
            <Switch>
                <Route path='/' component={WelcomePage} exact />
                <Route path='/signUp' component={RegisterPage} />
                <Route path='/loginIn' component={LogInPage} />
            </Switch>
        </div>
    )
}

export default InitialPage