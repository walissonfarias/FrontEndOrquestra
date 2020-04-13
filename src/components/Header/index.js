import React from 'react'

import './styles.css'

import logo from '../../assets/icons/logo.svg'
import logout from '../../assets/icons/logout.svg'
import profile from '../../assets/icons/profile.svg'

export default () => {
  return (
    <header>

      <div className="container-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="container-header">
        <h1>{'Title'}</h1>

        <div className="container-header-profile">

          <div className="profile-info">
            <p><b>Nome do usuário</b></p>
            <p>Administrador</p>
          </div>

          <img src={profile} alt="profile" width="60" />
          <img src={logout} alt="logout" />

        </div>

      </div>

    </header>
  )
}