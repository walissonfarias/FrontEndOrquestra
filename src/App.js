import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from './router'

import Header from './components/Header'
import Nav from './components/Nav'

export default () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Nav/>
                <Router />
            </div>
        </BrowserRouter>
    )
}
            