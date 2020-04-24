import React, { useState } from 'react'
import { TwitterPicker } from 'react-color'
import { TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from "@material-ui/pickers"
import MomentUtils from '@date-io/moment'

export default ({ classification, setClassification, tour, setTour, date, setDate, duration, setDuration, start, setStart, end, setEnd }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="container-divider-hour">
          <div className="container-divider">
            <FormControl variant="outlined" className="input">
              <InputLabel id="demo-simple-select-outlined-label">Classificação *</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                value={classification}
                onChange={event => setClassification(event.target.value)} 
                label="Classificação *"
              >
                <MenuItem value={'Livre'}>Livre</MenuItem>
                <MenuItem value={10}>+10</MenuItem>
                <MenuItem value={12}>+12</MenuItem>
                <MenuItem value={14}>+14</MenuItem>
                <MenuItem value={16}>+16</MenuItem>
                <MenuItem value={18}>+18</MenuItem>
              </Select>
            </FormControl>

            <div className="input">
              <TextField 
                className="color-picker"
                label="Turnê *" 
                variant="outlined" 
                onClick={() => setDisplayColorPicker(true)} 
                value={tour.hex} 
                InputProps={{style: {color: tour.hex, fontWeight: "bold"}}}
                onChange={event => setTour({"hex": event.target.value})} 
              />
              <div >
                {displayColorPicker ? 
                  <div className='popover'>
                    <div className='cover' onClick={() => setDisplayColorPicker(false)}/>
                    <TwitterPicker 
                      color={tour} 
                      onChange={setTour}
                    />
                  </div> 
                  :<></>
                }
              </div>
            </div>

          </div>

          <div className="container-divider">
            <DatePicker
              className="input"
              ampm={false}
              format="DD/MM/YYYY"
              label="Data *"
              inputVariant="outlined"
              value={date}
              onChange={setDate}
            />
            <TextField 
              className="input" 
              type="number"
              label="Duração" 
              variant="outlined"
              value={duration}
              onChange={event => setDuration(event.target.value)}
              InputProps={{
                endAdornment: <>
                {
                  duration ?
                    <InputAdornment position="end">minutos</InputAdornment>
                  :<></>
                }
                </>
              }}
            />
          </div>

          <div className="container-divider">
            <TimePicker
              className="input"
              ampm={false}
              label="Horário de início *"
              inputVariant="outlined"
              value={start}
              onChange={setStart}
            />
            <TimePicker
              className="input"
              ampm={false}
              label="Horário de término *"
              inputVariant="outlined"
              value={end}
              onChange={setEnd}
            />
          </div>
        </div>
      </MuiPickersUtilsProvider>
    )
}
