import React, { useContext } from 'react'
import GatewayFilter from './GatewayFilter'
import ProjectFilter from './ProjectFilter'
import DateFilter from './DateFilter'
import './../../assets/css/FilterButtonGroup.css'
import { ProjectContext } from '../../context/ProjectContext'

const FilterButtonGroup = () => {
    const { handleDateSelection, fromValue, toValue, selectedProject, selectedGateway } = useContext(ProjectContext)
    return (
        <div className='filter-container'>
            <div className='report-text'>
                <h3 className='filter-heading'>Reports</h3>
                <span className='filter-sub-heading'>Easily generate a report of your transactions</span>
            </div>

            <div className='filter-button-group'>
                <ProjectFilter />
                <GatewayFilter />
                <DateFilter />
                <button className="generate-report-button" onClick={() => { handleDateSelection(fromValue, toValue, selectedProject, selectedGateway) }}>Generate report</button>
            </div>
        </div>
    )
}

export default FilterButtonGroup