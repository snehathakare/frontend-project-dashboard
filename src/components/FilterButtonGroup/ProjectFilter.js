import React, { useState, useContext } from 'react'
import './../../assets/css/FilterButtonGroup.css';
import { ProjectContext } from '../../context/ProjectContext'

export default function ProjectFilter() {
    const { projects, getAllProjects } = useContext(ProjectContext)
    const [project, setProject] = useState('');
    const [isClicked, setIsClicked] = useState(false)

    const handleProjectSelection = () => {
        setIsClicked(!isClicked)
        getAllProjects()
    };

    return (
        <div className='project-button'>
            <select
                className='project-dialog'
                value={project}
                onChange={(event) => { setProject(event.target.value) }}
                onClick={handleProjectSelection}
            >
                <option value="">
                    All Projects
                </option>
                {projects && projects.map(project => {
                    return (
                        <option key={project.projectId} value={project.projectId}>{project.name}</option>
                    )
                })}
            </select>
        </div>
    );
}
