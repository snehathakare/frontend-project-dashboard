import React, { useState, useEffect, Fragment, useContext } from 'react'
import './../../assets/css/FilterButtonGroup.css'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ProjectContext } from '../../context/ProjectContext';

const DateFilter = () => {
    const { setFromValue, setToValue, fromValue, toValue } = useContext(ProjectContext)

    return (
        <Fragment>
            <div className='from-date-button'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="From date"
                        value={fromValue}
                        onChange={(fromDate) => {
                            setFromValue(fromDate.toISOString().slice(0, 10));
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className='to-date-button'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="To date"
                        value={toValue}
                        onChange={(toDate) => {
                            setToValue(toDate.toISOString().slice(0, 10));
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </Fragment>
    );
}

export default DateFilter