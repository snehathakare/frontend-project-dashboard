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
    const { allProjects, reports, gateways } = useContext(ProjectContext)
    const filteredReports = reports.filter(project => project.projectId.includes(project.projectId))
    const filteredProjects = filteredReports.filter(project => project.projectId.includes(project.projectId))

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* {filteredReports && filteredReports.map(project => { */}
                        {/* return ( */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                {/* <Typography>{project.name}</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableRow>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Gateway</TableCell>
                                    <TableCell align="right">Transaction Id</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                                <TableBody>
                                    {filteredReports.map((project) => (
                                        <TableRow
                                            key={project.paymentId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="right">{project.created}</TableCell>
                                            <TableCell align="right">{project.gatewayId}</TableCell>
                                            <TableCell align="right">{project.paymentId}</TableCell>
                                            <TableCell align="right">{project.amount}</TableCell>
                                            <TableCell align="right">{project.name}</TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </AccordionDetails>
                        </Accordion>
                        {/* ) */}
                        {/* })} */}
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer >
    );
}

export default AllProjects