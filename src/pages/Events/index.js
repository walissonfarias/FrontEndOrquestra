import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Stepper, Step, StepLabel } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import moment from 'moment'

import './styles.css'

import StepOne from '../../components/Form/Events/StepOne'
import StepTwo from '../../components/Form/Events/StepTwo'
import StepThree from '../../components/Form/Events/StepThree'

export default () => {
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar()

    const steps = ['Dados', 'Dados adicionais', 'Descrição']
    const [activeStep, setActiveStep] = useState(0)

    const [name, setName] = useState('')
    
    const [local, setLocal] = useState('')
    const [address, setAddress] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const [classification, setClassification] = useState(null)
    const [tour, setTour] = useState({'hex': '#d79b07'})
    
    const [date, setDate] = useState(null)
    const [duration, setDuration] = useState('')
    
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)
    
    const [description, setDescription] = useState('')

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

    function handleVisualization(event) {
      if (activeStep === 0) {
        if (!name) {
          event.preventDefault()
          return enqueueSnackbar('Preencha o Nome do evento');
        }
        if (!local) {
          event.preventDefault()
          return enqueueSnackbar('Preencha o Local do evento');
        }
      }

      if (activeStep === 1) {
        if (!classification) {
          event.preventDefault()
          return enqueueSnackbar('Preencha a Classificação do evento');
        }
        if (!date) {
          event.preventDefault()
          return enqueueSnackbar('Preencha a Data do evento');
        }
        if (!start) {
          event.preventDefault()
          return enqueueSnackbar('Preencha o Horário de início do evento');
        }
        if (!end) {
          event.preventDefault()
          return enqueueSnackbar('Preencha o Horário de término do evento');
        }
        if (end <= start) {
          event.preventDefault()
          return enqueueSnackbar('O Horário de início deve ser anterior ao Horário de término', {variant: 'warning'});
        }
      }

      if (activeStep === 2) {
        if (!description) {
          event.preventDefault()
          return enqueueSnackbar('Preencha a Descrição do evento');
        }
      }

      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1)
        event.preventDefault()
        return 
      }

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

    function handleBackStep() {
      if (activeStep <= 0) return
      setActiveStep(activeStep - 1)
    }
    
    return (
      <main id="events" className="pages">
        <div className="container-add-events">
          
          <h2>Criar Evento</h2>

          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleVisualization}>
            <div className="container-form">
              {
                activeStep === 0 ? 
                  <StepOne 
                    name={name}
                    setName={setName}
                    local={local}
                    setLocal={setLocal}
                    address={address}
                    setAddress={setAddress}
                    lat={lat}
                    setLat={setLat}
                    long={long}
                    setLong={setLong}
                  />
                : activeStep === 1 ? 
                  <StepTwo 
                    classification={classification}
                    setClassification={setClassification}
                    tour={tour}
                    setTour={setTour}
                    date={date}
                    setDate={setDate}
                    duration={duration}
                    setDuration={setDuration}
                    start={start}
                    setStart={setStart}
                    end={end}
                    setEnd={setEnd}
                  />
                : activeStep === 2 ? 
                  <StepThree 
                    description={description}
                    setDescription={setDescription}
                  />
                : <></>
              }
            </div>

            <div className="container-buttons">
              <Button disabled={activeStep <= 0} className="button back" onClick={handleBackStep} variant="contained">Anterior</Button>

              <Button className="button" type="submit" variant="contained">
                {activeStep < steps.length - 1 ? 'Próximo' : 'Visualizar'}
              </Button>
            </div>

          </form>
          
        </div>
        
      </main>
    )
}
