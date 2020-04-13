import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/pt-br';

import './styles.css'

export default () => {
  const history = useHistory()

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

  function handleVisualization() {
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

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  async function handleSetImage(event) {
    const file = event.target.files[0];
    const data = await toBase64(file);
    setImage(data)
    setImageName(file.name)
  }

  return (
    <main id="news" className="pages">

      <div className="container-add-news">

        <h2>Criar Notícia</h2>

        <form onSubmit={handleVisualization}>

          <input
            type="text"
            placeholder="Título da notícia"
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />

          <div className="container-divider">

            <div className="content-divider-text">
              <input
                type="text"
                placeholder="Título reduzido"
                value={briefTitle}
                onChange={event => setBriefTitle(event.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Breve descrição"
                value={description}
                onChange={event => setDescription(event.target.value)}
                required
              />
            </div>


            <div className="content-divider-file">
              { image ? <img src={image} alt="banner"/> : <p>Arraste sua imagem aqui ou clique para selecionar'</p> }
              <input
                type="file"
                onChange={handleSetImage}
                placeholder="Breve descrição"
                required={!image}
              />
            </div>
          </div>

          <textarea
            type="text"
            placeholder="Notícia"
            value={text}
            onChange={event => setText(event.target.value)}
            rows="10"
          />

          <button type="submit">Visualizar</button>

        </form>

      </div>

    </main>
  )
}
