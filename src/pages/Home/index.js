import React, { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab'

import './styles.css'

import api from '../../services/apiEvents'

import CardNews from '../../components/Card/CardNews'
import CardEvents from '../../components/Card/CardEvents'

export default () => {
  const [events, setEvents] = useState([]) 
  const [currentPageEvents, setCurrentPageEvents] = useState(1) 
  const [pagesEvents, setPagesEvents] = useState(null) 
  
  const [news, setNews] = useState([])
  const [currentPageNews, setCurrentPageNews] = useState(1)
  const [pagesNews, setPagesNews] = useState(null)

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/events?page=${currentPageEvents}`)
      setEvents(data.docs)

      setCurrentPageEvents(Number(data.page))
      setPagesEvents(data.pages)
    })()
  }, [currentPageEvents])

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/news?page=${currentPageNews}`)
      setNews(data.docs)

      setCurrentPageNews(Number(data.page))
      setPagesNews(data.pages)
    })()
  }, [currentPageNews])

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
        
        {pagesEvents ?
        <div className="container-pagination">
          <Pagination 
            color="primary"
            page={currentPageEvents}
            onChange={(_, value) => setCurrentPageEvents(value)}
            count={pagesEvents} 
            shape="rounded"
          />
        </div>
        : <></>}
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
        {pagesNews ?
        <div className="container-pagination">
          <Pagination 
            color="primary"
            page={currentPageNews}
            onChange={(_, value) => setCurrentPageNews(value)}
            count={pagesNews} 
            shape="rounded" 
          />
        </div>
        : <></>}
      </div>
    </main>
  )
}
    