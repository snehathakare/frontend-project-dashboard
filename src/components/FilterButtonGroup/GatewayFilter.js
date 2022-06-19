import React, { useState, useContext } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './../../assets/css/FilterButtonGroup.css';
import { ProjectContext } from '../../context/ProjectContext'

export default function GatewayFilter() {
    const { allGateways, getAllGateways, selectedGateway, updateGateway } = useContext(ProjectContext)

    const handleGatewaySelection = () => {
        getAllGateways()
    };

    return (
        <div className='gateway-button'>
            <select
                className='project-dialog'
                value={selectedGateway}
                onChange={(event) => { updateGateway(event.target.value) }}
                onClick={handleGatewaySelection}
            >
                <option value="">
                    All Gateways
                </option>
                {allGateways && allGateways.map(gateway => {
                    return (
                        <option value={gateway.gatewayId}>{gateway.name}</option>
                    )
                })}

            </select>


        </div>
    );
}
