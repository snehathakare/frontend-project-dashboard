import React, { useState, useContext } from 'react'
import { ProjectContext } from './../../context/ProjectContext'
import './../../assets/css/AllProjects.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AllProjects = () => {
    const [projectHeading, setProjectHeading] = useState('All projects')
    const [gatewayHeading, setGatewayHeading] = useState('All gateways')

    return (
        <div className='table-container'>
            <ProjectsTable />
        </div>
    )
}

export function ProjectsTable() {
    const { allProjects, reports, allGateways } = useContext(ProjectContext)
    const filteredReports = allProjects.filter(project => project.projectId.includes(project.projectId))
    const filteredProjects = filteredReports.filter(project => project.projectId.includes(project.projectId))
    console.log(reports)
    return (
        <table>
            {filteredReports && filteredReports.map(project => {
                return (
                    <tr>
                        <th>{project.name}</th>
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

export default AllProjects