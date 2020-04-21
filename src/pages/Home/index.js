import React, { useEffect, useState } from 'react'

import './styles.css'

import api from '../../services/apiEvents'

import CardNews from '../../components/CardNews'
import CardEvents from '../../components/CardEvents'

export default () => {
  const [news, setNews] = useState([])
  const [events, setEvents] = useState([]) 

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/news')
      setNews(data.docs)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const {data} = await api.get('/events')
      setEvents( data.docs)

    })()
  }, [])

  return (
    <main id="home" className="pages">
      <div className="container-home">
        <h2>Últimos eventos adicionados</h2>

        <div className="container-cards">
        {
            events ? 
            events.map(item => 
              <div className="content-card" key={item._id}>
                <CardEvents events={item} home={true} />
              </div>
            )
            :
            <></>

          }
          
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
    