import React, { useContext } from 'react'
import './../../assets/css/FilterButtonGroup.css';
import { ProjectContext } from '../../context/ProjectContext'

export default function ProjectFilter() {
    const { allProjects, getAllProjects, updateProject, selectedProject } = useContext(ProjectContext)


    const handleProjectSelection = (e) => {
        getAllProjects()
    };

    return (
        <div className='project-button'>
            <select
                className='project-dialog'
                value={selectedProject}
                onChange={(e) => { updateProject(e.target.value) }}
                onClick={handleProjectSelection}
            >
                <option value="">
                    All Projects
                </option>
                {allProjects && allProjects.map(project => {
                    return (
                        <option key={project.projectId} value={project.projectId}>{project.name}</option>
                    )
                })}
            </select>
        </div>
    );
}
