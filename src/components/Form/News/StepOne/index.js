import React from 'react'
import { TextField } from '@material-ui/core'

export default ({title, setTitle, briefTitle, setBriefTitle, description, setDescription, image, setImage, setImageName}) => {
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
        <>
            <div className="container-divider">
                <TextField 
                    className="input" 
                    label="Título da notícia *" 
                    variant="outlined" 
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />
            </div>

            <div className="container-divider">
                <TextField 
                    className="input" 
                    label="Título reduzido *" 
                    variant="outlined" 
                    value={briefTitle}
                    onChange={event => setBriefTitle(event.target.value)} 
                />
            </div>
            <div className="container-divider">
                <TextField 
                    className="input" 
                    label="Breve descrição *" 
                    variant="outlined" 
                    value={description}
                    onChange={event => setDescription(event.target.value)} 
                />
            </div>

            <div className="container-divider">
                <div className="container-divider-file">
                    { 
                        image ? 
                            <img src={image} alt="banner"/> 
                        : <p>Arraste sua imagem aqui ou clique para selecionar *</p> 
                    }
                    <input
                        type="file"
                        onChange={handleSetImage}
                    />
                </div>
            </div>
        </>
    )
}
