import React from 'react'
import './styles.css'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'
import TourImage from '../../assets/icons/iconTour'

import api from '../../services/apiEvents'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

import UserContext from '../../contexts/index'
import moment from 'moment'
export default ({events, home}) => {
    moment.locale();         // pt-br

    const history = useHistory()

    const startTime = home ? moment(events.hour.end).format('LT') : localStorage.getItem('@startTime')
    
    const {setShowModal, setWhere} = useContext(UserContext)
    async function handleDeleteEvents(){
        const {data} = await api.get(`/events/${events._id}`)
        localStorage.setItem('@events', JSON.stringify(data))
        localStorage.setItem('@deleteItem_id', data._id)
        localStorage.setItem('@isEvent', true)
        setShowModal(true)
        setWhere('e')
      }

    async function handleUpdateEvents(){
        const {data} = await api.get(`/events/${events._id}`)
        const {name, tour, date, local, address, duration, classification, description} = data
        const newData ={name, tour, date, local, address, duration, classification, description}
        localStorage.setItem('@events', JSON.stringify(newData))
        localStorage.setItem('@isEditEvent', true)
        localStorage.setItem('@editItem_id_events', data._id)
        history.push('/add-events')
    }

    return (
        <div id="container-card-events">
            <tr> 
                <td>
                    <br/>
                    <div id="tour-image">
                        <TourImage/>
                    </div>
                    <p className="card-event-name">{events.name}</p>
                </td>
            </tr>

            <br/><br/><br/>
            
            <div className="time-local" class="row">
                <div className ="local" >           
                    <p className="local-title">Horário
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        
                        Local
                    </p>
                    <p className = "local-value">{startTime}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;
                        {events.local}
                    </p>
                    {
                        home ?
                        <div className="footer-card-events">
                            <div className="icons-card-events">
                                <img src={edit} alt="edit" onClick={handleUpdateEvents} />
                                <img src={trash} alt="delete" onClick ={handleDeleteEvents}/>
                            </div>
                        </div>
                        : null
                    }
                </div>     
            </div>
        </div>
    )
}