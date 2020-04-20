import React, { useEffect, useState } from 'react'

import './styles.css'

import api from '../../services/api'
import api2 from '../../services/apiEvents'

import CardNews from '../../components/CardNews'
import CardEvents from '../../components/CardEvents'

export default () => {
  const [news, setNews] = useState([])
  const [events, setEvents] = useState([]) 

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/news')
      setNews(data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const { data299 } = await api2.get('/events')
      setEvents(data299)
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
            console.log(events,"\n\n")

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
    