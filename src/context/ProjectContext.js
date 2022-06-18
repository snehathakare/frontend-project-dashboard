import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProjectContext = createContext();

const baseURL = "http://178.63.13.157:8090/mock-api/api/projects"
const baseURL1 = "http://178.63.13.157:8090/mock-api/api/gateways"

export const ProjectProvider = ({ children }) => {
    const [gateways, setGateways] = useState([]);
    const [projects, setProjects] = useState([]);
    const [reports, setReports] = useState([]);

    const getAllProjects = async () => {
        try {
            await axios.get(baseURL).then((response) => {
                setProjects(response.data.data);
            })
        } catch (error) {
            console.log(error);
        }
    };

    const getAllGateways = async () => {
        await axios.get(baseURL1).then((response) => {
            setGateways(response.data.data);
        });
    }

    const handleDateSelection = async (from, to) => {
        const selection = {
            from: from,
            to: to,
            // gatewayId: "i6ssp"
        };
        axios.post(`http://178.63.13.157:8090/mock-api/api/report`, JSON.stringify(selection), { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res.data.data);
                // setReports(res.data.data)
            })
    }

    return (
        <ProjectContext.Provider value={{ reports, projects, gateways, getAllGateways, getAllProjects, setProjects, setGateways, handleDateSelection }}>
            {children}
        </ProjectContext.Provider>
    );
};
