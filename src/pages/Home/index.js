import React, { useEffect, useState } from 'react'

import './styles.css'

import api from '../../services/api'

import CardNews from '../../components/CardNews'

export default () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/news')
      setNews(data)
    })()
  }, [])

  return (
    <main id="home" className="pages">
      <div className="container-home">
        <h2>Últimos eventos adicionados</h2>

        <div className="container-cards">
          
        </div>
      </div>

      <div className="container-home">
        <h2>Últimas notícias adicionadas</h2>

        <div className="container-cards">
          {
            news ? 
            news.map(item => 
              <div className="content-card" key={item._id}>
                <CardNews news={item} home={true} />
              </div>
            )
            :
            <></>
          }
        </div>
      </div>
    </main>
  )
}
    