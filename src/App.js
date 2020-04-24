import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Router from './router'
import UserContext from './utils/contexts'

import Header from './components/Header'
import Nav from './components/Nav'
import Modal from './components/Modal'

export default () => {
    const [showModal, setShowModal] = useState(false)
    const [where, setWhere] = useState('')

    const theme = createMuiTheme({
        palette: {primary: {main: '#c59c5f'}}
    });
    
    function closeModal(){        
        setShowModal(false)
    }
    
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="app">
                    <UserContext.Provider value={{showModal, setShowModal, where, setWhere}}>
                        <Header/>
                        <Nav/>
                        <Router />
                        {showModal ? <Modal onClose={()=>{closeModal()}} /> : null}
                    </UserContext.Provider>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    )
}
