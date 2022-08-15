import React, { useContext } from 'react'
import './../../assets/css/FilterButtonGroup.css'
import { ProjectContext } from '../../context/ProjectContext';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateFilter = () => {
    const { setFromValue, setToValue, fromValue, toValue } = useContext(ProjectContext)

    return (
        <div className='flex'>
            <DatePicker
                placeholderText='from'
                selected={fromValue}
                onChange={(fromDate) => {
                    setFromValue(fromDate);
                }}
            />
            <DatePicker wrapperClassName='to-date-button'
                placeholderText='to'
                selected={toValue}
                onChange={(toDate) => {
                    setToValue(toDate);
                }}
            />
        </div>
    );
}

export default DateFilter