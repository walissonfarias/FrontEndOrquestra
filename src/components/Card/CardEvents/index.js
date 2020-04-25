import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import './styles.css'

import edit from '../../../assets/icons/edit.svg'
import trash from '../../../assets/icons/trash.svg'
import TourImage from '../../../assets/icons/iconTour'

import api from '../../../services/apiEvents'

import UserContext from '../../../utils/contexts'

export default ({events, home}) => {
    const history = useHistory()
    const {setShowModal, setWhere} = useContext(UserContext)

    async function handleDeleteEvent(){
        const {data} = await api.get(`/events/${events._id}`)
        localStorage.setItem('@events', JSON.stringify(data))
        localStorage.setItem('@deleteItem_id', data._id)
        setShowModal(true)
        setWhere('event')
      }

    async function handleEditEvent(){
        const {data} = await api.get(`/events/${events._id}`)
        localStorage.setItem('@events', JSON.stringify(data))
        localStorage.setItem('@isEditEvent', true)
        localStorage.setItem('@editItem_id_events', data._id)
        history.push('/add-events')
    }

    return (
        <>
            {
                events ?
                    <div id="container-card-events">
                        <main>
                            <div className="header">
                                <TourImage color={events.tour}/>
                                <p className="event-name">{events.name}</p>
                            </div>

                            <div className="info">
                                <div className="info-hour">
                                    <p className="info-label">Horário</p>
                                    {
                                        events.hour ?
                                            <p className="info-value">{moment(events.hour.start).format('LT')} - {moment(events.hour.end).format('LT')}</p>
                                        : <></>
                                    }
                                </div>
                                <div className="info-location">
                                    <p className="info-label">Local</p>
                                    <p className="info-value">{events.local}</p>
                                </div>
                            </div>
                        </main>

                        <div className="container-date">
                            <div className="date">
                                <p className="info-date">{moment(events.date).format('DD')}</p>
                                <p className="info-value">{moment(events.date).format('MMMM')}</p>
                            </div>

                            {
                                home ? 
                                    <div className="icons">
                                        <img src={edit} alt="edit" onClick={handleEditEvent} />
                                        <img src={trash} alt="delete" onClick={handleDeleteEvent}/>
                                    </div>
                                :<></>
                            }
                        </div>
                    </div>
                : <></>
            }
        </>
    )
}
