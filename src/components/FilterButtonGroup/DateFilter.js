import React, { useState, useEffect, Fragment, useContext } from 'react'
import './../../assets/css/FilterButtonGroup.css'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ProjectContext } from '../../context/ProjectContext';

const DateFilter = () => {
    const { handleDateSelection } = useContext(ProjectContext)
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);

    return (
        <Fragment>
            <div className='from-date-button'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="From date"
                        value={fromValue}
                        onChange={(newValue) => {
                            setFromValue(newValue);
                        }}
                        onClick={handleDateSelection(fromValue, toValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className='to-date-button'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="To date"
                        value={toValue}
                        onChange={(newValue) => {
                            setToValue(newValue);
                        }}
                        onClick={handleDateSelection(fromValue, toValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </Fragment>
    );
}

export default DateFilter