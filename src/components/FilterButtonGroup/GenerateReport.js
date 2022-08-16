import React from 'react'
import './../../assets/css/GenerateReport.css'
import NoReport from './../../assets/images/no-reports.svg'

const GenerateReport = () => {
    return (
        <div className='no-report-section'>
            <span className='reports-heading'>No Reports</span>
            <span className='reports-text'>Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.</span>
            <img src={NoReport} className="img-report" alt="no reports" />
        </div>
    )
}

export default GenerateReport