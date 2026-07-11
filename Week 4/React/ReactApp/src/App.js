import React, { useState } from 'react';
import './App.css';
import MyFirstReact from './ex1/MyFirstReact';
import AppEx2 from './ex2/AppEx2';
import CalculateScore from './ex3/Components/CalculateScore';
import Posts from './ex4/Posts';
import CohortDetails from './ex5/CohortDetails';
import CricketApp from './ex9/CricketApp';
import OfficeRental from './ex10/OfficeRental';
import EventExamples from './ex11/EventExamples';
import TicketBookingApp from './ex12/TicketBookingApp';
import BloggerApp from './ex13/BloggerApp';

function App() {
  const [activeTab, setActiveTab] = useState('ex13'); // Default to ex13 as it is the current exercise

  const renderContent = () => {
    switch (activeTab) {
      case 'ex1':
        return <MyFirstReact />;
      case 'ex2':
        return <AppEx2 />;
      case 'ex3':
        return (
          <CalculateScore 
            Name="Vishwaa S" 
            School="Vellore Institute of Technology" 
            Total={360} 
            goal={4} 
          />
        );
      case 'ex4':
        return <Posts />;
      case 'ex5':
        return <CohortDetails />;
      case 'ex9':
        return <CricketApp />;
      case 'ex10':
        return <OfficeRental />;
      case 'ex11':
        return <EventExamples />;
      case 'ex12':
        return <TicketBookingApp />;
      case 'ex13':
        return <BloggerApp />;
      default:
        return <BloggerApp />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Digital Nurture Portal</h1>
        <p className="subtitle">Unified Exercises Workspace</p>
        
        <nav className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'ex1' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex1')}
          >
            Exercise 1
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex2' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex2')}
          >
            Exercise 2
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex3' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex3')}
          >
            Exercise 3
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex4' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex4')}
          >
            Exercise 4
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex5' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex5')}
          >
            Exercise 5
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex9' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex9')}
          >
            Exercise 9
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex10' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex10')}
          >
            Exercise 10
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex11' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex11')}
          >
            Exercise 11
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex12' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex12')}
          >
            Exercise 12
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ex13' ? 'active' : ''}`} 
            onClick={() => setActiveTab('ex13')}
          >
            Exercise 13
          </button>
        </nav>
      </header>

      <main className="App-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
