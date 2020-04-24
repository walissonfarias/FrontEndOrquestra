import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './styles.css'

import homeOutline from '../../assets/icons/Home/outline.svg'
import eventOutline from '../../assets/icons/Event/outline.svg'
import newsOutline from '../../assets/icons/News/outline.svg'
import userOutline from '../../assets/icons/User/outline.svg'

import homeFill from '../../assets/icons/Home/fill.svg'
import eventFill from '../../assets/icons/Event/fill.svg'
import newsFill from '../../assets/icons/News/fill.svg'
import userFill from '../../assets/icons/User/fill.svg'

import UserContext from '../../utils/contexts'

export default () => {
    const location = useLocation();
    const history = useHistory()

    const { setShowModal, setWhere } = useContext(UserContext)

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

    function handleOnClick(event, route) {
        event.preventDefault()
        if (location.pathname === route) return
        switch (location.pathname) {
            case '/add-events':
            case '/view-events':
            case '/add-news':
            case '/view-news':
                localStorage.clear()
                setWhere(`descart@${route}`)
                setShowModal(true)
                return
            default:
                break
        }
        history.push(route)
    }

    return (
        <aside className="menu-area">
            <nav className="menu">
                <a 
                    href="/" 
                    onClick={event => handleOnClick(event, '/')} 
                    className={home ? 'selected' : ''}
                >
                    <img src={home ? homeFill : homeOutline} alt="inicio"/>
                </a>
                <a
                    href="/add-events" 
                    onClick={event => handleOnClick(event, '/add-events')} 
                    className={event ? 'selected' : ''}
                    >
                    <img src={event ? eventFill : eventOutline} alt="evento"/>
                </a>
                <a 
                    href="/add-news" 
                    onClick={event => handleOnClick(event, '/add-news')} 
                    className={news ? 'selected' : ''}
                >
                    <img src={news ? newsFill : newsOutline} alt="noticias"/>
                </a>
                <a 
                    href="/add-users" 
                    onClick={event => handleOnClick(event, '/add-users')} 
                    className={user ? 'selected' : ''}
                >
                    <img src={user ? userFill : userOutline} alt="usuarios"/>
                </a>
            </nav>
        </aside>
    )
}
    