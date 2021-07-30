import React from 'react';

function StaffDetailItem(props, context) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start ">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.label}</div>
        <span>{props.text}</span>
      </div>
    </li>
  );
}

export default StaffDetailItem;
