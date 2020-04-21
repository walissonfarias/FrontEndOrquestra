import React from 'react'
import CardNews from '../CardNews/index'
import CardEvents from '../CardEvents/index'
import './styles.css'
import { useContext } from 'react'

import UserContext from '../../contexts/index'

import api from '../../services/apiEvents'

export default ({onClose = () => {}},  isEvent) => {
    const newss = localStorage.getItem('@news')
    const eventss = localStorage.getItem('@events')
    
    const deleteID = localStorage.getItem('@deleteItem_id')

    const {where} = useContext(UserContext)
    console.log(where);
    async function deleteContent(){
        if(where === 'n') {
            await api.delete(`/news/${deleteID}`).then(response => {
                console.log(response)
            })
        }  
        else {
            
            await api.delete(`/events/${deleteID}`).then(response => {
                console.log(response)
            })
        }
        window.location.reload()
    }

    return(
        <div className="modal">
            <div className="container">
                <div className="content">
                    <h1 className="title">DELETAR</h1> <br/>

                    {   where === 'e' ?
                        <div>
                            <p>Você deseja deletar esse evento?</p> <br/> <br/>
                            <div className= "content-card">
                                <CardEvents home = {false} events={JSON.parse(eventss)} />
                            </div>
                        </div> 
                         
                        :

                        <div>
                            <p>Você deseja deletar essa notícia?</p> <br/> <br/>
                            <div className= "content-card">
                                <CardNews news ={JSON.parse(newss)} home={false}/> <br/><br/>
                            </div>
                        </div>
                    }
                    <div>
                        <button className="cancel" onClick = {onClose}> <b>Cancelar</b></button>
                        <button className="delete" onClick = {() => deleteContent()}> <b>Deletar</b></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
