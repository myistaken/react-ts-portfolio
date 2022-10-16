import React from 'react';
import './App.css';
import AppBar from './components/appbar/AppBar';
import Overview from './components/overview/Overview';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Overview/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
