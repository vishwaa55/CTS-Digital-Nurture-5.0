import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, goal }) {
  // Calculate average. Ensure Total and goal are treated as numbers.
  const numericTotal = Number(Total) || 0;
  const numericGoal = Number(goal) || 0;
  const average = numericGoal > 0 ? (numericTotal / numericGoal).toFixed(2) : 0;

  return (
    <div className="score-card">
      <div className="card-header">
        <h2>Student Score Details</h2>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="label">Student Name:</span>
          <span className="value">{Name || 'N/A'}</span>
        </div>
        <div className="info-row">
          <span className="label">School:</span>
          <span className="value">{School || 'N/A'}</span>
        </div>
        <div className="info-row">
          <span className="label">Total Score:</span>
          <span className="value">{numericTotal}</span>
        </div>
        <div className="info-row">
          <span className="label">Goal (Subjects):</span>
          <span className="value">{numericGoal}</span>
        </div>
        <hr className="divider" />
        <div className="info-row highlight">
          <span className="label">Average Score:</span>
          <span className="value">{average}</span>
        </div>
      </div>
    </div>
  );
}

export default CalculateScore;
