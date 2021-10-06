import React from 'react';

import './activity-item.css';

function ActivityItem({
  id, label, description, value,
}) {
  return (
    <span className="activity-list__item">
      <input type="radio" name="activity" id={id} value={value} />
      <label htmlFor={id}>{label}</label>
      <p>{description}</p>
    </span>
  );
}

export default ActivityItem;
