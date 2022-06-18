import React, { useState } from 'react'
import GatewayFilter from './GatewayFilter'
import ProjectFilter from './ProjectFilter'
import DateFilter from './DateFilter'
import GenerateReport from './GenerateReport'
import './../../assets/css/FilterButtonGroup.css'

const FilterButtonGroup = () => {
    const [reportIsVisible, setReportIsVisible] = useState(false)
    const handleGenerateReport = () => { setReportIsVisible(!reportIsVisible) }
    return (
        <div>
            <p className='filter-heading'>Reports</p>
            <p className='filter-sub-heading'>Easily generate a report of your transactions</p>
            <div>
                <ProjectFilter />
                <GatewayFilter />
                <DateFilter />
                <button className="generate-report-button" onClick={handleGenerateReport}>Generate report</button>
                {reportIsVisible && <GenerateReport />}
            </div>

        </div>
    )
}

export default FilterButtonGroup