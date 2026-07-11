import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import ListofIndianPlayers from './ListofIndianPlayers';
import './cricket.css';

// 11 Players and their scores
const playersData = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Rishabh Pant', score: 68 },
  { name: 'Hardik Pandya', score: 55 },
  { name: 'Ravindra Jadeja', score: 91 },
  { name: 'Jasprit Bumrah', score: 10 },
  { name: 'Mohammed Shami', score: 8 },
  { name: 'Yuzvendra Chahal', score: 5 },
  { name: 'Ravichandran Ashwin', score: 25 },
  { name: 'Shreyas Iyer', score: 60 }
];

// Indian Team (11 players)
const IndianTeam = [
  'Sachin Tendulkar',
  'MS Dhoni',
  'Virat Kohli',
  'Rohit Sharma',
  'Kapil Dev',
  'Sunil Gavaskar',
  'Rahul Dravid',
  'Sourav Ganguly',
  'Anil Kumble',
  'Virender Sehwag',
  'Yuvraj Singh'
];

// Helper functions using ES6 array destructuring
const OddPlayers = ([p1, , p3, , p5, , p7, , p9, , p11]) => {
  const list = [p1, p3, p5, p7, p9, p11].filter(Boolean);
  return (
    <ul className="destructured-players-list">
      {list.map((player, index) => (
        <li key={index} className="destructured-player-item">{player}</li>
      ))}
    </ul>
  );
};

const EvenPlayers = ([, p2, , p4, , p6, , p8, , p10]) => {
  const list = [p2, p4, p6, p8, p10].filter(Boolean);
  return (
    <ul className="destructured-players-list">
      {list.map((player, index) => (
        <li key={index} className="destructured-player-item">{player}</li>
      ))}
    </ul>
  );
};

// Two arrays to merge
const T20players = ['Jasprit Bumrah', 'Suryakumar Yadav', 'Hardik Pandya', 'Axar Patel'];
const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Abhimanyu Easwaran', 'Yash Dayal', 'Rinku Singh'];

// Merged array using the ES6 Spread/Merge feature
const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];

function CricketApp() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
  };

  if (flag === true) {
    return (
      <div className="cricket-dashboard">
        <div className="cricket-header">
          <h2>Cricket Dashboard</h2>
          <div className="toggle-switch-container">
            <span className="toggle-label">Active State: flag=true</span>
            <button className="toggle-btn flag-true" onClick={toggleFlag}>
              Toggle flag
            </button>
          </div>
        </div>
        <div className="cricket-content">
          <h1>List of Players</h1>
          <ListofPlayers players={playersData} />
          <hr style={{ border: 'none', borderTop: '1px dashed rgba(255,255,255,0.1)', margin: '30px 0' }} />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={playersData} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cricket-dashboard">
        <div className="cricket-header">
          <h2>Cricket Dashboard</h2>
          <div className="toggle-switch-container">
            <span className="toggle-label">Active State: flag=false</span>
            <button className="toggle-btn flag-false" onClick={toggleFlag}>
              Toggle flag
            </button>
          </div>
        </div>
        <div className="cricket-content">
          <div>
            <h1>Indian Team</h1>
            <h1>Odd Players</h1>
            {OddPlayers(IndianTeam)}
            <hr style={{ border: 'none', borderTop: '1px dashed rgba(255,255,255,0.1)', margin: '30px 0' }} />
            <h1>Even Players</h1>
            {EvenPlayers(IndianTeam)}
          </div>
          <hr style={{ border: 'none', borderTop: '1px dashed rgba(255,255,255,0.1)', margin: '30px 0' }} />
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
          </div>
        </div>
      </div>
    );
  }
}

export default CricketApp;
