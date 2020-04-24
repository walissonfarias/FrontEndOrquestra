import React from 'react'
import { TextField } from '@material-ui/core'

export default ({description, setDescription}) => {
    
    return (
        <div className="container-divider">
            <TextField 
                className="input" 
                label="Descrição *" 
                variant="outlined" 
                multiline 
                rows={10} 
                value={description}
                onChange={event => setDescription(event.target.value)} 
            />
        </div>
    )
}
