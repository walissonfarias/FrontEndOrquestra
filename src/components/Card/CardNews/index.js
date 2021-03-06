import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import './styles.css'

import api from '../../../services/apiEvents'

import edit from '../../../assets/icons/edit.svg'
import trash from '../../../assets/icons/trash.svg'

import UserContext from '../../../utils/contexts'

export default ({ news, home }) => {
  const history = useHistory()

  const {setShowModal, setWhere} = useContext(UserContext)

  async function handleEditNews() {
    const {data} = await api.get(`/news/${news._id}`)
    localStorage.setItem('@news', JSON.stringify(data))
    localStorage.setItem('@isEdit', true)
    localStorage.setItem('@editItem_id', data._id)
    history.push('/add-news')
  }
  async function handleDeleteNews(){
    const {data} = await api.get(`/news/${news._id}`)
    localStorage.setItem('@news', JSON.stringify(data))
    localStorage.setItem('@deleteItem_id', data._id)
    setShowModal(true)
    setWhere('news')
  }
  
  return (
    <>
      {
        news ?
          <div id="container-card-news">
            <img src={news.image} alt="banner"/>
            <p className="card-news-brief-title">{news.briefTitle}</p>
            <p className="card-news-by">POR ADMIN</p>
            <p className="card-news-description">{news.description}</p>

              <div className="footer-card-news">
                <p className="card-news-date">{moment(news.date).format('LL').toLowerCase()}</p>
                {
                  home ?
                    <div className="icons-card-news">
                      <img src={edit} alt="edit" onClick={handleEditNews} />
                      <img src={trash} alt="delete" onClick={handleDeleteNews}/>
                    </div>
                  : <></>
                }
              </div>
          </div> 
        : <></>
      }
    </>
  )
}
