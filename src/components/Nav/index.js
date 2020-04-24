import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './styles.css'

import homeOutline from '../../assets/icons/Home/outline.svg'
import eventOutline from '../../assets/icons/Event/outline.svg'
import newsOutline from '../../assets/icons/News/outline.svg'
import userOutline from '../../assets/icons/User/outline.svg'

import homeFill from '../../assets/icons/Home/fill.svg'
import eventFill from '../../assets/icons/Event/fill.svg'
import newsFill from '../../assets/icons/News/fill.svg'
import userFill from '../../assets/icons/User/fill.svg'

export default () => {
    const location = useLocation();
    
    const [home, setHome] = useState();
    const [event, setEvent] = useState();
    const [news, setNews] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        switch (location.pathname) {
            case '/': 
                setHome(true); 
                setEvent(false);
                setNews(false);
                setUser(false);
                break;
            case '/add-events': 
            case '/view-events':
                setHome(false); 
                setEvent(true);
                setNews(false);
                setUser(false);
                break;
            case '/add-news':
            case '/view-news':
                setHome(false); 
                setEvent(false);
                setNews(true);
                setUser(false);
                break;
            case '/add-users':
                setHome(false); 
                setEvent(false);
                setNews(false);
                setUser(true);
            break;
            default: 
                setHome(false); 
                setEvent(false);
                setNews(false);
                setUser(false);
                break;
        }
    }, [location]);

    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/" className={home ? 'selected' : ''}>
                    <img src={home ? homeFill : homeOutline} alt="inicio"/>
                </Link>
                <Link to="/add-events" className={event ? 'selected' : ''}>
                    <img src={event ? eventFill : eventOutline} alt="evento"/>
                </Link>
                <Link to="/add-news" className={news ? 'selected' : ''}>
                    <img src={news ? newsFill : newsOutline} alt="noticias"/>
                </Link>
                <Link to="/add-users" className={user ? 'selected' : ''}>
                    <img src={user ? userFill : userOutline} alt="usuarios"/>
                </Link>
            </nav>
        </aside>
    )
}
    