import React from 'react'
import './../../assets/css/GenerateReport.css'
import NoReport from './../../assets/images/no-reports.svg'

const GenerateReport = () => {
    return (
        <div>
            <span className='reports-heading'>No Reports</span>
            <p className='reports-text'>Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.</p>
            <img src={NoReport} alt="no reports" />
        </div>
    )
}

export default GenerateReport