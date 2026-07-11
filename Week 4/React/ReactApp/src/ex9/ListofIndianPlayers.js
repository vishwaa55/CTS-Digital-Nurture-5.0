import React from 'react';

function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div className="player-list-container">
      <div className="player-grid">
        {IndianPlayers.map((player, index) => (
          <div key={index} className="player-card merge-card">
            <span className="player-number">{index + 1}</span>
            <div className="player-info">
              <span className="player-name">{player}</span>
              <span className="player-status-tag">Merged Player</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListofIndianPlayers;
