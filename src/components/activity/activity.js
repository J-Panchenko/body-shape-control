import React from 'react';
import ActivityItem from '../activity-item';

import './activity.css';

function Activity({ activities, onActivityChange }) {
  const elements = activities.map((item) => {
    const { ...itemProps } = item;
    const { id } = item;

    return (
      <li key={id}>
        <ActivityItem
          {...itemProps}
          onActivityChange={onActivityChange}
        />
      </li>
    );
  });

  return (
    <div className="activity">
      <h2 className="subtitle">Физическая активность</h2>
      <ul className="activity-list">
        {elements}
      </ul>
    </div>
  );
}

export default Activity;
