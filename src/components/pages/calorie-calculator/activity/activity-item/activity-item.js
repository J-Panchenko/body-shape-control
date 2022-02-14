import React from 'react';
import './activity-item.css';

function ActivityItem({
  id, label, description, value, activityValue, onActivityChange,
}) {
  return (
    <span className="activity-list__item">
      <input
        type="radio"
        required
        name="activity"
        id={id}
        value={value}
        checked={value === activityValue}
        onChange={onActivityChange}
      />
      <label htmlFor={id}>{label}</label>
      <p>{description}</p>
    </span>
  );
}

export default ActivityItem;
