import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import ViewNews from './pages/ViewNews'
import Events from './pages/Events'
import ViewEvents from './pages/ViewEvents'
import Users from './pages/Users'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component ={Home}/>

            <Route path="/add-news" component ={News}/>
            <Route path="/View-news" component ={ViewNews}/>

            <Route path="/add-events" component ={Events}/>
            <Route path="/View-events" component ={ViewEvents}/>

            <Route path="/add-users" component ={Users}/>
            <Redirect from ="*" to="/"/>
        </Switch>
    )
}