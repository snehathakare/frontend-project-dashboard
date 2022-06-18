import React, { useState, useContext } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './../../assets/css/FilterButtonGroup.css';
import { ProjectContext } from '../../context/ProjectContext'

export default function GatewayFilter() {
    const { gateways, getAllGateways } = useContext(ProjectContext)
    const [gateway, setGateway] = useState('');
    const [isClicked, setIsClicked] = useState(false)

    const handleGatewaySelection = (event) => {
        setGateway(event.target.value)
        setIsClicked(!isClicked)
        getAllGateways()
    };

    return (
        <div className='gateway-button'>
            <select
                className='project-dialog'
                value={gateway}
                onChange={(event) => { setGateway(event.target.value) }}
                onClick={handleGatewaySelection}
            >
                <option value="">
                    All Gateways
                </option>
                {gateways && gateways.map(gateway => {
                    return (
                        <option value={gateway.gatewayId}>{gateway.name}</option>
                    )
                })}

            </select>


        </div>
    );
}
