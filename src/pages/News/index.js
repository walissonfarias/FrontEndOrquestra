import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Stepper, Step, StepLabel } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import moment from 'moment';
import 'moment/locale/pt-br';

import './styles.css'

import StepOneNews from '../../components/Form/News/StepOne'
import StepTwoNews from '../../components/Form/News/StepTwo'

export default () => {
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()

  const steps = ['Dados', 'Notícia']
  const [activeStep, setActiveStep] = useState(0)

  const [title, setTitle] = useState('')
  const [briefTitle, setBriefTitle] = useState('')
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)

  const [imageName, setImageName] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('@news')
    if (data) {
      const news = JSON.parse(data)
      setTitle(news.title)
      setBriefTitle(news.briefTitle)
      setDescription(news.description)
      setText(news.text)
      setImage(news.image)
      setImageName(news.imageName)
    }
  }, [])

  function handleVisualization(event) {
    if (activeStep === 0) {
      if (!title) {
        event.preventDefault()
        return enqueueSnackbar('Preencha o Título da notícia');
      }
      if (!briefTitle) {
        event.preventDefault()
        return enqueueSnackbar('Preencha o Título reduzido da notícia');
      }
      if (!description) {
        event.preventDefault()
        return enqueueSnackbar('Preencha a Breve descrição da notícia');
      }
      if (!image) {
        event.preventDefault()
        return enqueueSnackbar('A notícia deve conter uma imagem');
      }
    }

    if (activeStep === 1) {
      if (!text) {
        event.preventDefault()
        return enqueueSnackbar('Preencha o texto da Notícia');
      }
    }

    if (activeStep < steps.length - 1) {
      event.preventDefault()
      setActiveStep(activeStep + 1)
      return 
    }

    const data = {
      title,
      briefTitle,
      description,
      text,
      image,
      date: moment().format(),
      imageName
    }

    localStorage.setItem('@news', JSON.stringify(data))

    history.push('/view-news')
  }

  function handleBackStep() {
    if (activeStep <= 0) return
    setActiveStep(activeStep - 1)
  }

  return (
    <main id="news" className="pages">
      <div className="container-add-news">

        <h2>Criar Notícia</h2>

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
                <StepOneNews
                  title={title}
                  setTitle={setTitle}
                  briefTitle={briefTitle}
                  setBriefTitle={setBriefTitle}
                  description={description}
                  setDescription={setDescription}
                  image={image}
                  setImage={setImage}
                  setImageName={setImageName}
                />
                : activeStep === 1 ? 
                <StepTwoNews
                  text={text}
                  setText={setText}
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
