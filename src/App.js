import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import Router from './router'
import UserContext from './contexts/index'

import Header from './components/Header'
import Nav from './components/Nav'
import Modal from './components/Modal/index'

export default () => {
    
    const [showModal, setShowModal] = useState(false)
    const [where, setWhere] = useState('')
    
    function closeModal(){        
        setShowModal(false)
    }
    
    return (
        <BrowserRouter>
            <div className="app">
                <UserContext.Provider value = {{showModal, setShowModal,where, setWhere}}>
                    <Header/>
                    <Nav/>
                    <Router />
                    {showModal ? <Modal onClose={()=>{closeModal()}} isEvent = {localStorage.getItem('@isEvent')}/> : null}
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    )
}
