import React from 'react';

function StaffListItem(props) {
  return (
    <li
      key={props.identity}
      className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.name}</div>
        ID: {props.identity}
      </div>
    </li>
  );
}

export default StaffListItem;
