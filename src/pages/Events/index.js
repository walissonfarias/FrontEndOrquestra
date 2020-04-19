import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default () => {
    const history = useHistory()

    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [tour, setTour] = useState('Turnê')
    const [date, setDate] = useState('')
    const [classification, setClassification] = useState('')
    const [startTime, setStartTime] = useState('')
    const [address, setAddress] = useState('')
    const [local, setLocal] = useState('')
    const [description, setDescription] = useState('')
    
    

    useEffect(()=>{
      const data = localStorage.getItem('@events')
      if(data){
        const event = JSON.parse(data)
        setName(event.name)
        setDuration(event.duration)
        setDate(event.date)
        setClassification(event.classification)
        setStartTime(event.startTime)
        setAddress(event.address)
        setLocal(event.local)
        setDescription(event.description)
        //
        //
      }
    },[])

    function handleVisualization() {
      const data = {
        name,
        duration,
        date,
        tour,
        classification,
        startTime,
        address,
        local,
        description
      }
      localStorage.setItem('@events', JSON.stringify(data))

      history.push('/view-events')

    }
    
    return (
      <main id="events" className="pages">
        <div className="container-add-events">
          
          <h2>Criar Evento</h2>

          <form onSubmit={handleVisualization}>

            <input 
              type="text"
              placeholder="Nome do evento"
              value={name}
              onChange={event=> setName(event.target.value)}
              required
            />

            <div className="container-divider">

              <div className="content-divider-text">
                
                <select className="select-tour"
                  placeholder={tour}
                  value={tour}
                  onChange ={event=> setTour(event.target.value)}
                  required name="turne">
                  <option value="Municipal">Azul</option>
                  <option value="Estadual">Dourado</option>
                  <option value="Nacional">Laranja</option>
                </select>
                

                <input 
                  type="date"
                  placeholder="Data"
                  value={date}
                  onChange={event => setDate(event.target.value)}
                  required
                />

                <input 
                  type="time" 
                  placeholder="Horário"
                  value={startTime}
                  onChange = {event => setStartTime(event.target.value)} 
                  required
                />
              </div>

              <div className="content-divider-text2">

                <input 
                  type="text"
                  placeholder="Duração"
                  value={duration}
                  onChange ={event=> setDuration(event.target.value)}
                  required
                />

                <input 
                  type="text"
                  placeholder="Classificação"
                  value={classification}
                  onChange={event => setClassification(event.target.value)}
                  required
                />

                <input 
                  type="text" 
                  placeholder="Endereço"
                  value={address}
                  onChange = {event => setAddress(event.target.value)} 
                  required
                />

              </div>


            </div>

            <input 
              type="text" 
              placeholder="Local"
              value={local}
              onChange = {event => setLocal(event.target.value)} 
              required
            />

            <textarea 
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={event => setDescription(event.target.value)} 
              rows="3"
            />

            <button type="submit">Visualizar</button>


          </form>
          
        </div>
      </main>
    )
}
    