import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProjectContext = createContext();

const baseURL = "http://178.63.13.157:8090/mock-api/api/projects"
const baseURL1 = "http://178.63.13.157:8090/mock-api/api/gateways"

export const ProjectProvider = ({ children }) => {
    const [allGateways, setAllGateways] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const [reports, setReports] = useState([]);
    const [selectedProject, setSelectedProject] = useState('')
    const [selectedGateway, setSelectedGateway] = useState('')
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);


    const getAllProjects = async () => {
        try {
            await axios.get(baseURL).then((response) => {
                setAllProjects(response.data.data);
            })
        } catch (error) {
            console.log(error);
        }
    };

    const getAllGateways = async () => {
        await axios.get(baseURL1).then((response) => {
            setAllGateways(response.data.data);
        });
    }

    const handleDateSelection = async (from, to, selectedProject, selectedGateway) => {
        const selection = {
            from: from,
            to: to,
            projectId: selectedProject,
            gatewayId: selectedGateway

        };
        axios.post(`http://178.63.13.157:8090/mock-api/api/report`, JSON.stringify(selection), { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                setReports(res.data.data)
            })
    }

    useEffect(() => {
        getAllProjects()
        getAllGateways()
    }, [])

    return (
        <ProjectContext.Provider value={{
            updateProject: project => setSelectedProject(project),
            updateGateway: gateway => setSelectedGateway(gateway),
            reports, handleDateSelection, setFromValue, fromValue, setToValue, toValue,
            allProjects, allGateways, getAllGateways, getAllProjects, setAllProjects,
            setAllGateways, selectedProject, selectedGateway
        }}>
            {children}
        </ProjectContext.Provider>
    );
};
