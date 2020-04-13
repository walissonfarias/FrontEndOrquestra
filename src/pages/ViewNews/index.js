import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

import './styles.css'

import api from '../../services/api'

import CardNews from '../../components/CardNews'

export default () => {
  const history = useHistory()
  
  const [news, setNews] = useState({})

  useEffect(() => {
      const data = localStorage.getItem('@news')
      setNews(JSON.parse(data))
  }, [])

  async function handleAddNews() {
    await api.post('http://localhost:8000/news', news)
    localStorage.removeItem('@news')
    history.push('/')
  }

  async function handleUpdateNews(){
    const data = localStorage.getItem('@news')
    const dataId = localStorage.getItem('@editItem_id')
    
    await api.put(`http://localhost:8000/news/${dataId}`, JSON.parse(data))
    
    localStorage.removeItem('@isEdit')
    localStorage.removeItem('@news')
    localStorage.removeItem('@editItem_id')
    history.push('/')
  }

  function handleBack() {
    history.push('/add-news')
  }

  return (
    <main id="view-news" className="pages">

      <div className="container-view-news">

        <div className="container-view">
          <h2>Visualização</h2>

          <div className="content-view">
            <img src={news.image} alt="banner"/>
            <div className="container-text">
              <p className="view-news-title">{news.title}</p>
              <p className="view-news-description">{news.description}</p>
              <p className="view-news-text">{news.text}</p>
            </div>
          </div>
        </div>

        <div className="container-view-card">
          <h2>Visualização</h2>

          <div className="content-view">
            
            <CardNews news={news} />

            <div className="container-buttons">
              {localStorage.getItem('@isEdit') ?
                <button onClick={handleUpdateNews}>Atualizar Evento</button> :
                <button onClick={handleAddNews}>Adicionar Evento</button>
              }              
              <button onClick={handleBack}>Editar</button>
            </div>
          </div> 
        </div>

      </div>
    </main>
  )
}