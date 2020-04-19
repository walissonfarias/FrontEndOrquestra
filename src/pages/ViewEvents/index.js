import React , { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

import './styles.css'

import moment from 'moment'

import CardEvents from '../../components/CardEvents'
import api from '../../services/apiEvents'

export default () => {
	const history = useHistory()
	
	const [events, setEvents] = useState({})
	  
	useEffect(() => {
		const data = localStorage.getItem('@events')
		setEvents(JSON.parse(data))
	}, [])

	async function handleUpdateEvents(){
		// const data = localStorage.getItem('@events')
		// const dataId = localStorage.getItem('@editItem_id_events')
		
		//await api.put(`/events/${dataId}`, JSON.parse(data))
		
		localStorage.removeItem('@isEditEvent')
		localStorage.removeItem('@events')
		localStorage.removeItem('@editItem_id_events')
		history.push('/')
	  }

	async function handleAddEvents() {
		await api.post('/events', events)
		localStorage.removeItem('@events')
		history.push('/')
	}

	function handleBack() {
		history.push('/add-news')
	}

    return (
    	<main id="view-events" className="pages">

			<div className="container-view-events">

				<div className="container-view">
					<h2>Visualização</h2>

					<div className="content-view">
						<div className="container-text">
							<h2 className="view-event-name"><b>{events.name}</b></h2>
							<p className="view-event-date">{moment(events.date).format('LL').toLowerCase()}</p><br/> <br/>
							<p className="view-event-description">{events.description}</p><br/>
							<p className="view-event-local"> <b>Local: </b> {events.local}</p>
							<p className="view-event-address"><b>Endereço: </b>{events.address}</p><br/>
							<p className="view-event-duration"><b>Duração: </b>{events.duration}</p>
							<p className="view-event-classification"><b>Classificação: </b>{events.classification}</p> <br/>
						</div>
					</div>
				</div>

				<div className="container-view-card">
          			<h2>Visualização</h2>

					<div className="content-view">
						
						<CardEvents events={events} />

						<div className="container-buttons">
							{
								localStorage.getItem('@isEditEvent') ?
								<button onClick={handleUpdateEvents}>Atualizar Evento</button> :
								<button onClick={handleAddEvents}>Adicionar Evento</button>
							}
						
							<button onClick={handleBack}>Editar</button>
						</div>
					</div> 
					</div>

		  	</div>
      </main>
    )
}