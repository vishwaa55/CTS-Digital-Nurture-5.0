import React from 'react';

function Scorebelow70({ players }) {
  // Filter using arrow functions of ES6
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div className="player-list-container">
      <div className="player-grid">
        {filteredPlayers.map((player, index) => (
          <div key={index} className="player-card alert-card">
            <span className="player-number">{index + 1}</span>
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <span className="player-score warning">Score: {player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scorebelow70;
