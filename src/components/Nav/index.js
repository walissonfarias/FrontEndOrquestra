import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import homeOutline from '../../assets/icons/Home/outline.svg'
import eventOutline from '../../assets/icons/Event/outline.svg'
import newsOutline from '../../assets/icons/News/outline.svg'
import userOutline from '../../assets/icons/User/outline.svg'

// import homeFill from '../../assets/icons/Home/fill.svg'
// import eventFill from '../../assets/icons/Event/fill.svg'
// import newsFill from '../../assets/icons/News/fill.svg'
// import userFill from '../../assets/icons/User/fill.svg'

export default () => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/">
                    <img src={homeOutline} alt="inicio"/>
                </Link>
                <Link to="/add-events">
                    <img src={eventOutline} alt="evento"/>
                </Link>
                <Link to="/add-news">
                    <img src={newsOutline} alt="noticias"/>
                </Link>
                <Link to="/add-users">
                    <img src={userOutline} alt="usuarios"/>
                </Link>
            </nav>
        </aside>
    )
}
    