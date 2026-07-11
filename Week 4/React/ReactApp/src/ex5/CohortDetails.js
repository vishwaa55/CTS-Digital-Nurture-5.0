import React from 'react';
import styles from './CohortDetails.module.css';

const cohortsData = [
  {
    id: 1,
    name: 'Java Developer Cohort',
    status: 'ongoing',
    startDate: '01-Jan-2026',
    endDate: '30-Jun-2026',
    strength: '25'
  },
  {
    id: 2,
    name: 'React Specialist Cohort',
    status: 'completed',
    startDate: '01-Jul-2025',
    endDate: '31-Dec-2025',
    strength: '30'
  },
  {
    id: 3,
    name: 'Cloud Architect Cohort',
    status: 'ongoing',
    startDate: '15-Mar-2026',
    endDate: '15-Sep-2026',
    strength: '20'
  }
];

function CohortDetails() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Outfit, sans-serif' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '24px' }}>Academy Cohorts Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cohortsData.map(cohort => (
          <div key={cohort.id} className={styles.box}>
            <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
              {cohort.name}
            </h3>
            <dl>
              <dt>Status</dt>
              <dd>{cohort.status}</dd>
              
              <dt>Start Date</dt>
              <dd>{cohort.startDate}</dd>
              
              <dt>End Date</dt>
              <dd>{cohort.endDate}</dd>
              
              <dt>Student Strength</dt>
              <dd>{cohort.strength}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CohortDetails;
