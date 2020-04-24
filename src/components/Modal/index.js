import React from 'react'
import CardNews from '../CardNews/index'
import CardEvents from '../CardEvents/index'
import './styles.css'
import { useContext } from 'react'

import UserContext from '../../contexts/index'

import api from '../../services/apiEvents'

export default ({onClose = () => {}}) => {
    const _news = localStorage.getItem('@news')
    const _events = localStorage.getItem('@events')
    
    const deleteID = localStorage.getItem('@deleteItem_id')

    const {where} = useContext(UserContext)

    async function deleteContent(){
        if(where === 'n') 
            await api.delete(`/news/${deleteID}`)
        else
            await api.delete(`/events/${deleteID}`)
        window.location.reload()
    }

    return(
        <div id="modal">
            <div className="container">
                <p className="title">DELETAR</p>
                <p>Você deseja deletar essa {where === 'e' ? 'evento' : 'notícia'}?</p>
                <div className= "content-card">
                    {where === 'e' ?
                        <CardEvents home={false} events={JSON.parse(_events)} />
                        : <CardNews news={JSON.parse(_news)} home={false}/>
                    }
                </div>
                <div className="container-buttons">
                    <button onClick={onClose}>Cancelar</button>
                    <button className="delete" onClick={() => deleteContent()}>Deletar</button>
                </div>
            </div>
        </div>
    )
}
