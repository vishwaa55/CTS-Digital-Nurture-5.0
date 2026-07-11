import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div className="player-list-container">
      <div className="player-grid">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <span className="player-number">{index + 1}</span>
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <span className="player-score">Score: {player.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListofPlayers;
