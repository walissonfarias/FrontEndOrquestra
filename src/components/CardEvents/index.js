import React from 'react'
import './styles.css'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'
import splitTime from '../../utils/splitDate'
import teste from '../../assets/i.jpg'

export default ({events, home}) => {


    async function handleUpdateNews(){
        // const {data} = await api.get(`/events/${events._id}`)
        // localStorage.setItem('@events', JSON.stringify(data))
        // localStorage.setItem('@isEditEvent', true)
        // localStorage.setItem('@editItem_id_events', data._id)
        // history.push('/add-event')
    }

    return (
        <div id="container-card-events">
            <tr> 
                <td>
                    <br/>
                    <img src={teste} alt="tour" id = "tour-image"/>
                    <p className="card-event-name">{events.name}</p>
                    
                </td>
            </tr>

            <br/>
            
            <div className="time-local" class="row">
                <div className ="local" >           
                    <p className="local-title">Horário
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Local
                    </p>
                    <p className = "local-value">{events.startTime} - {splitTime(events)}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        {events.local}
                    </p>
                    {
                        home ?
                        <div className="footer-card-events">
                            <div className="icons-card-events">
                                <img src={edit} alt="edit" onClick={handleUpdateNews} />
                                <img src={trash} alt="delete" onClick ={""}/>
                            </div>
                        </div>
                        : null
                    }
                </div>     
            </div>
        </div>
    )
} 