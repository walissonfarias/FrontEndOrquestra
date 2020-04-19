import React from 'react'
import CardNews from '../CardNews/index'
import './styles.css'

import '../../services/api'


export default ({onClose = () => {}}, {onDelete = () => {}}, isEvent) => {
    const newss = localStorage.getItem('@news')
    

    return(
        <div className="modal">
            <div className="container">
                <div className="content">
                    <h1 className="title">DELETAR</h1> <br/>

                    {   isEvent ?
                        <>
                            <p>Você deseja deletar esse evento?</p> <br/> <br/>
                            <div className= "content-card">
                                {/* cardevents */}
                            </div>
                        </> 
                         
                        :

                        <>
                            <p>Você deseja deletar essa notícia?</p> <br/> <br/>
                            <div className= "content-card">
                                <CardNews news ={JSON.parse(newss)} home={false}/> <br/><br/>
                            </div>
                        </>
                    }
                    <div>
                        <button className="cancel" onClick = {onClose}> <b>Cancelar</b></button>
                        <button className="delete" onClick = {onDelete}> <b>Deletar</b></button>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}