import React from 'react'
import { TextField } from '@material-ui/core'

export default ({name, setName, local, setLocal, address, setAddress, lat, setLat, long, setLong}) => {
    return (
        <>
            <div className="container-divider">
                <TextField 
                    className="input" 
                    label="Nome do evento *" 
                    variant="outlined" 
                    value={name}
                    onChange={event => setName(event.target.value)} 
                />
            </div>

            <div className="container-divider">
                <TextField 
                    className="input" 
                    label="Local *" 
                    variant="outlined"
                    value={local}
                    onChange={event => setLocal(event.target.value)} 
                />
            </div>

            <div className="container-divider">
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
        </>
    )
}
