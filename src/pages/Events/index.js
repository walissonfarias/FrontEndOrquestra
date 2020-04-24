import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TwitterPicker } from 'react-color'
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from "@material-ui/pickers"
import MomentUtils from '@date-io/moment'
import moment from 'moment'

import './styles.css'

export default () => {
    const history = useHistory()

    const [name, setName] = useState('')
    
    const [local, setLocal] = useState('')
    const [address, setAddress] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const [classification, setClassification] = useState('')
    const [tour, setTour] = useState({'hex': '#d79b07'})
    
    const [date, setDate] = useState(null)
    const [duration, setDuration] = useState('')
    
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)
    
    const [description, setDescription] = useState('')

    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    useEffect(()=>{
      const data = localStorage.getItem('@events')
      if(data){
        const event = JSON.parse(data)
        setName(event.name)
        setDuration((event.duration).replace(' minutos', ''))
        setDate(event.date)
        setClassification(event.classification)
        setAddress(event.address)
        setLocal(event.local)
        setDescription(event.description)
        setTour({'hex': event.tour})
        setEnd(event.hour.end)
        setStart(event.hour.start)
        setLat(event.location.coordinates[1])
        setLong(event.location.coordinates[0])
      }
    },[])

    function handleVisualization() {
      const data = {
        name,
        'tour': tour.hex,
        'date': moment(date).format(),
        'hour': {
          'start': moment(start).format(),
          'end': moment(end).format(),
        },
        local,
        address,
        'location': {
          'coordinates': [long, lat]
        },
        'duration': duration ? duration + ' minutos' : '',
        classification,
        description
      }

      localStorage.setItem('@events', JSON.stringify(data))

      history.push('/view-events')
    }
    
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <main id="events" className="pages">
        <div className="container-add-events">
          
          <h2>Criar Evento</h2>

          <form onSubmit={handleVisualization}>

            <div className="container-divider">
              <TextField 
                className="input" 
                label="Nome do evento" 
                variant="outlined" 
                value={name}
                onChange={event => setName(event.target.value)} 
                required
              />
            </div>

            <div className="container-divider">
              <div className="container-divider-location">
                
                <div className="container-divider-address">
                  <TextField 
                    className="input" 
                    label="Local" 
                    variant="outlined"
                    value={local}
                    onChange={event => setLocal(event.target.value)} 
                    required
                  />
                  <TextField 
                    className="input" 
                    label="Endereço" 
                    variant="outlined"
                    value={address}
                    onChange={event => setAddress(event.target.value)} 
                  />
                </div>

                <div className="container-divider">
                  <TextField 
                    className="input" 
                    type="number"
                    label="Latitude" 
                    variant="outlined" 
                    value={lat}
                    onChange={event => setLat(event.target.value)} 
                  />
                  <TextField 
                    className="input" 
                    type="number"
                    label="Longitude" 
                    variant="outlined" 
                    value={long}
                    onChange={event => setLong(event.target.value)} 
                  />
                </div>
              </div>

              <div className="container-divider-hour">
                <div className="container-divider">
                  <FormControl variant="outlined" className="input">
                    <InputLabel id="demo-simple-select-outlined-label">Classificação *</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      value={classification}
                      onChange={event => setClassification(event.target.value)} 
                      label="Classificação *"
                      required
                    >
                      <MenuItem value={'Livre'}>Livre</MenuItem>
                      <MenuItem value={10}>+10</MenuItem>
                      <MenuItem value={12}>+12</MenuItem>
                      <MenuItem value={14}>+14</MenuItem>
                      <MenuItem value={16}>+16</MenuItem>
                      <MenuItem value={18}>+18</MenuItem>
                    </Select>
                  </FormControl>

                  <div className="input">
                    <TextField 
                      label="Turnê" 
                      variant="outlined" 
                      onClick={() => setDisplayColorPicker(true)} 
                      value={tour.hex} 
                      InputProps={{style: {color: tour.hex, fontWeight: "bold"}}}
                      onChange={event => setTour({"hex": event.target.value})} 
                      required
                    />
                    <div >
                      {displayColorPicker ? 
                        <div className='popover'>
                          <div className='cover' onClick={() => setDisplayColorPicker(false)}/>
                          <TwitterPicker 
                            color={tour} 
                            onChange={setTour}
                          />
                        </div> 
                        :<></>
                      }
                    </div>
                  </div>

                </div>

                <div className="container-divider">
                  <DatePicker
                    className="input"
                    ampm={false}
                    format="DD/MM/YYYY"
                    label="Data"
                    inputVariant="outlined"
                    value={date}
                    onChange={setDate}
                    required
                  />
                  <TextField 
                    className="input" 
                    type="number"
                    label="Duração" 
                    variant="outlined"
                    value={duration}
                    onChange={event => setDuration(event.target.value)}
                    InputProps={{
                      endAdornment: <>
                      {
                        duration ?
                          <InputAdornment position="end">minutos</InputAdornment>
                        :<></>
                      }
                      </>
                    }}
                  />
                </div>

                <div className="container-divider">
                  <TimePicker
                    className="input"
                    ampm={false}
                    label="Horário de início"
                    inputVariant="outlined"
                    value={start}
                    onChange={setStart}
                    required
                  />
                  <TimePicker
                    className="input"
                    ampm={false}
                    label="Horário de término"
                    inputVariant="outlined"
                    value={end}
                    onChange={setEnd}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="container-divider">
              <TextField 
                className="input" 
                label="Descrição" 
                variant="outlined" 
                multiline 
                rows={10} 
                value={description}
                onChange={event => setDescription(event.target.value)} 
                required
              />
            </div>

            <Button className="button" type="submit" variant="contained">Visualizar</Button>

          </form>
          
        </div>
      </main>
      </MuiPickersUtilsProvider>
    )
}
