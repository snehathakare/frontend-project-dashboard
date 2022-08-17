import React, { useState, useContext } from 'react'
import { ProjectContext } from './../../context/ProjectContext'
import './../../assets/css/OneEntity.css'
import './../../assets/css/AllProjects.css'


const OneProjectOneGateway = () => {
    const [projectHeading, setProjectHeading] = useState('Projects 1')
    const [gatewayHeading, setGatewayHeading] = useState('Gateway 1')

    return (
        <div className='single-entity-container'>
            <span className='single-entity-heading'>{projectHeading} | {gatewayHeading}</span>
            <div><FilterData /></div>
            <div className='total'>total</div>
        </div>
    )

}

const FilterData = () => {
    const { reports, selectedProject, selectedGateway } = useContext(ProjectContext)
    const filteredReports = reports.filter(project => project.gatewayId.includes(selectedGateway))
    const filteredData = filteredReports.filter(project => project.projectId.includes(selectedProject))

    return (
        <table>
            <tr>
                <th align="center">Date</th>
                {/* <TableCell align="center">Gateway</TableCell> */}
                <th align="center">Transaction Id</th>
                <th align="center">Amount</th>
            </tr>
            {filteredData.map(project => {
                return (
                    <tr
                        key={project.paymentId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <td align="center">{project.created}</td>
                        {/* <td align="center">{project.gatewayId}</td> */}
                        <td align="center">{project.paymentId}</td>
                        <td align="center">{project.amount}</td>
                    </tr>
                )
            })}
        </table>
    );
}

export default OneProjectOneGateway