import React, { useContext } from 'react'
import GatewayFilter from './GatewayFilter'
import ProjectFilter from './ProjectFilter'
import DateFilter from './DateFilter'
import './../../assets/css/FilterButtonGroup.css'
import { ProjectContext } from '../../context/ProjectContext'

const FilterButtonGroup = () => {
    // const [reportIsVisible, setReportIsVisible] = useState(false)
    // const handleGenerateReport = () => { setReportIsVisible(!reportIsVisible) }
    const { handleDateSelection, fromValue, toValue, selectedProject, selectedGateway } = useContext(ProjectContext)
    return (
        <div>
            <p className='filter-heading'>Reports</p>
            <p className='filter-sub-heading'>Easily generate a report of your transactions</p>
            <div>
                <ProjectFilter />
                <GatewayFilter />
                <DateFilter />
                <button className="generate-report-button" onClick={() => { handleDateSelection(fromValue, toValue, selectedProject, selectedGateway) }}>Generate report</button>
            </div>
        </div>
    )
}

export default FilterButtonGroup