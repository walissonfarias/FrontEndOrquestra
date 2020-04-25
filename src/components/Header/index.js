import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/icons/logo.svg'
import logout from '../../assets/icons/logout.svg'
import profile from '../../assets/icons/profile.svg'

export default () => {
  const location = useLocation();
    
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (location.pathname) {
      case '/': 
        setTitle('Início'); 
        break;
      case '/add-events': 
      case '/view-events':
        setTitle('Eventos'); 
        break;
      case '/add-news':
      case '/view-news':
        setTitle('Notícias'); 
        break;
      case '/add-users':
        setTitle('Usuários'); 
        break;
      default:
        setTitle(''); 
        break;
    }
  }, [location]);

  return (
    <header>

      <div className="container-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="container-header">
        <h1>{title}</h1>

        <div className="container-header-profile">

          <div className="profile-info">
            <p><b>Nome do usuário</b></p>
            <p>Administrador</p>
          </div>

          <img src={profile} alt="profile" width="60" />
          <img id="logout" src={logout} alt="logout" />

        </div>

      </div>

    </header>
  )
}