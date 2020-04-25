import React , { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Button } from '@material-ui/core'

import './styles.css'

import moment from 'moment'

import CardEvents from '../../components/Card/CardEvents'
import api from '../../services/apiEvents'

export default () => {
	const history = useHistory()
	
	const [events, setEvents] = useState({})
	  
	useEffect(() => {
		const data = localStorage.getItem('@events')
		setEvents(JSON.parse(data))
	}, [])

	async function handleUpdateEvents(){
		const dataId = localStorage.getItem('@editItem_id_events')

		const data = {
			"name": events.name,
			"tour": events.tour,
			"date": events.date,
			"start": events.hour.start,
			"end": events.hour.end,
			"local": events.local,
			"address": events.address,
			"lat": events.location.coordinates[1],
			"long": events.location.coordinates[0],
			"duration": events.duration,
			"classification": events.classification,
			"description": events.description
		}
		
		await api.put(`/events/${dataId}`, data)
		
		localStorage.removeItem('@isEditEvent')
		localStorage.removeItem('@events')
		localStorage.removeItem('@editItem_id_events')
		history.push('/')
	  }

	async function handleAddEvents() {
		const data = {
			"name": events.name,
			"tour": events.tour,
			"date": new Date(events.date),
			"start": new Date(events.hour.start),
			"end": new Date(events.hour.end),
			"local": events.local,
			"address": events.address,
			"lat": events.location.coordinates[1] ? events.location.coordinates[1] : 0,
			"long": events.location.coordinates[0] ? events.location.coordinates[0] : 0,
			"duration": events.duration,
			"classification": events.classification,
			"description": events.description
		}
		await api.post('/events', data)

		localStorage.removeItem('@events')
		history.push('/')
	}

	function handleBack() {
		history.push('/add-events')
	}

    return (
    	<main id="view-events" className="pages">

			<div className="container-view-events">

				<div className="container-view">
					<h2>Visualização</h2>

					<div className="content-view">
						<div className="container-text">
							<p className="view-event-name">{events.name}</p>
							<p className="view-event-date">{moment(events.date).format('LL').toLowerCase()}</p><br/> <br/>
							<pre className="view-event-description">{events.description}</pre><br/>
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
									<Button 
										onClick={handleUpdateEvents} 
										variant="contained">
										Atualizar Evento
									</Button> :
									<Button 
										onClick={handleAddEvents} 
										variant="contained">
										Adicionar Evento
									</Button>
							}
							<Button 
								onClick={handleBack} 
								variant="text">
								Editar
							</Button>
						</div>
					</div> 
					</div>

		  	</div>
      </main>
    )
}