import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProjectContext = createContext();

const baseURL = "http://178.63.13.157:8090/mock-api/api/projects"
const baseURL1 = "http://178.63.13.157:8090/mock-api/api/gateways"

export const ProjectProvider = ({ children }) => {
    const [gateways, setGateways] = useState([]);
    const [projects, setProjects] = useState([]);

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
            console.log(response)
        });
    }

    useEffect(() => {
        getAllProjects()
        getAllGateways()
    }, []);

    return (
        <ProjectContext.Provider value={{ projects, gateways, getAllGateways, getAllProjects, setProjects, setGateways }}>
            {children}
        </ProjectContext.Provider>
    );
};
