import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

import UserContext from '../../utils/contexts'

import CardNews from '../Card/CardNews/index'
import CardEvents from '../Card/CardEvents/index'

import api from '../../services/apiEvents'

export default ({onClose = () => {}}) => {
    const history = useHistory()

    const { where } = useContext(UserContext)

    const event = JSON.parse(localStorage.getItem('@events'))
    const news = JSON.parse(localStorage.getItem('@news'))
    const deleteId = localStorage.getItem('@deleteItem_id')

    async function deleteContent(){
        if(where === 'news') 
            await api.delete(`/news/${deleteId}`)
        else
            await api.delete(`/events/${deleteId}`)
        localStorage.clear()
        window.location.reload()
    }

    function handleDescart() {
        const route = where.split('@')[1]
        history.push(route)
        onClose()
    } 

    return(
        <div id="modal">
            <div className="container">
                {where.includes('descart') ?
                <>
                    <p className="title">SAIR DA PÁGINA</p>
                    <p className="message">Ao sair da página você perderá o que está editando</p>
                    <div className="container-buttons">
                        <button onClick={onClose}>Voltar</button>
                        <button className="delete" onClick={handleDescart}>Sair</button>
                    </div>
                </>
                :
                <>
                    <p className="title">DELETAR</p>
                    <p>Você deseja deletar essa {where === 'event' ? 'evento' : 'notícia'}?</p>
                    <div className= "content-card">
                        {
                            where === 'event' ?
                                <CardEvents events={event} home={false} />
                            : <CardNews news={news} home={false} />
                        }
                    </div>
                    <div className="container-buttons">
                        <button onClick={onClose}>Cancelar</button>
                        <button className="delete" onClick={() => deleteContent()}>Deletar</button>
                    </div>
                </>}
            </div>
        </div>
    )
}
