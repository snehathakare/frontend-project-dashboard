import React, { useState, useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'
import './../assets/css/AllProjectsOneGateway.css'
import pieChart from './../assets/images/pie-chart.svg'
import AllProjects from './AllProjects'

const AllProjectsOneGateway = () => {
    const [projectHeading, setProjectHeading] = useState('Projects 1')
    const [gatewayHeading, setGatewayHeading] = useState('All gateways')
    const { getAllProjects, projects } = useContext(ProjectContext)
    return (
        <div className='one-gateway-container'>
            <div className='table-heading'>{projectHeading} | {gatewayHeading}</div>
            <div className='project-tab'><AllProjects /></div>
            <div className='project-types'>gateways names</div>
            <img className='pie-chart' src={pieChart} />
            <div className='total'>total</div>
        </div>
    )

}

export default AllProjectsOneGateway