import './App.css';
import React, { useState, useContext } from 'react'
import { ProjectContext } from './context/ProjectContext'
import LeftNavigation from './components/Navigation/LeftNavigation';
import TopNavigation from './components/Navigation/TopNavigation';
import Divider from './components/Navigation/Divider';
import FilterButtonGroup from './components/FilterButtonGroup/FilterButtonGroup';
import Footer from './components/Footer';
import AllProjects from './components/Projects/AllProjects';
import Reports from './components/Reports';
// import AllProjectsOneGateway from './components/Projects/AllProjectsOneGateway';
// import OneProjectAllGateway from './components/Projects/OneProjectAllGateway';
import OneProjectOneGateway from './components/Projects/OneProjectOneGateway';
import GenerateReport from './components/FilterButtonGroup/GenerateReport';

function App() {
  const { fromValue, toValue, selectedProject, selectedGateway } = useContext(ProjectContext)
  return (
    <div className="App">
      <TopNavigation />
      <Divider />
      <div className='flex'>
        <LeftNavigation />
        <FilterButtonGroup />
      </div>

      {fromValue && toValue ? <AllProjects /> :
        <GenerateReport />}

      {/* {fromValue && toValue && selectedProject ? <OneProjectAllGateway /> :
        <GenerateReport />}
        {fromValue && toValue && selectedGateway ? <AllProjectsOneGateway /> :
        <GenerateReport />} */}

      {fromValue && toValue && selectedProject && selectedGateway ? <OneProjectOneGateway /> :
        <GenerateReport />}

      <Footer />
    </div>
  );
}

export default App;
