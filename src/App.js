import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import Router from './router'
import UserContext from './contexts/index'

import Header from './components/Header'
import Nav from './components/Nav'
import DeleteNewsModal from './components/DeleteNews/index'


export default () => {
    
    const [showModal, setShowModal] = useState(false)
    const isEvent = localStorage.getItem('@isEvent')

    function closeModal(){        
        setShowModal(false)
    }
    function deleteContent(){
        setShowModal(false)
        //isEvent ? chamada a api do event : chamada api da noticia

    }

    return (
        <BrowserRouter>
            <div className="app">
                <UserContext.Provider value = {{showModal, setShowModal}}>
                    <Header/>
                    <Nav/>
                    <Router />
                    {showModal ? <DeleteNewsModal onClose={()=>{closeModal()}} onDelete ={()=>{deleteContent()}} isEvent = {isEvent}/> : null}
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    )
}
            