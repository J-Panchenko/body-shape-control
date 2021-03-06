import React from 'react';
import ActivityItem from './activity-item';

import './activity.css';

function Activity({ activities, activityValue, onActivityChange }) {
  const elements = activities.map((item) => {
    const { ...itemProps } = item;
    const { id } = item;

    return (
      <li key={id}>
        <ActivityItem
          {...itemProps}
          activityValue={activityValue}
          onActivityChange={onActivityChange}
        />
      </li>
    );
  });

  return (
    <div className="activity">
      <h2 className="parameter-subtitle">Physical Activity</h2>
      <ul className="activity-list">
        {elements}
      </ul>
    </div>
  );
}

export default Activity;
