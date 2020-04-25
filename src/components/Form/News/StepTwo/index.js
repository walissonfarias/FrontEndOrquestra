import React from 'react'
import { TextField } from '@material-ui/core'

export default ({text, setText}) => {
    return (
        <>
            <div className="container-divider">
                <TextField 
                className="input" 
                label="Notícia *" 
                variant="outlined" 
                multiline 
                rows={13} 
                value={text}
                onChange={event => setText(event.target.value)} 
                />
            </div>
        </>
    )
}
