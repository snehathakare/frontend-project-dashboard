import React, { useState, useContext } from 'react'
import { ProjectContext } from './../../context/ProjectContext'
import pieChart from './../assets/images/pie-chart.svg'
import './../assets/css/AllProjects.css'
import './../assets/css/OneEntity.css'
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

const OneProjectAllGateway = (pId) => {
    const [projectHeading, setProjectHeading] = useState('Projects 1')
    const [gatewayHeading, setGatewayHeading] = useState('All gateways')

    const { reports, selectedProject, allProjects } = useContext(ProjectContext)

    const filteredReports = reports.filter(project => project.projectId.includes(selectedProject))
    const filteredProjects = allProjects.filter(project => project.projectId.includes(selectedProject))

    return (
        <div>
            <div className='one-gateway-container'>
                <div className='single-entity-heading'>{projectHeading} | {gatewayHeading}</div>
            </div>
            <div className='table-container'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {filteredProjects.map(project => {
                                    return (
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography>{project.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <TableRow>
                                                    <TableCell align="right">Date</TableCell>
                                                    <TableCell align="right">Gateway</TableCell>
                                                    <TableCell align="right">Transaction Id</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                </TableRow>
                                                <TableBody>
                                                    {filteredReports.map((row) => (
                                                        <TableRow
                                                            key={row.paymentId}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell align="right">{row.created}</TableCell>
                                                            <TableCell align="right">{row.paymentId}</TableCell>
                                                            <TableCell align="right">{row.amount}</TableCell>
                                                        </TableRow>

                                                    ))}
                                                </TableBody>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
            <div className='project-types'>gateways names</div>
            <img className='pie-chart' src={pieChart} alt="pie chart" />
            <div className='total'>total</div>
        </div>
    );
}

export default OneProjectAllGateway