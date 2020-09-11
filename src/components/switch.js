import React from "react";

export default function Switch(props) {
  return (
    <div className="switch-container">
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input switch-input-btn"
          id={props.name}
          name={props.name}
          checked={props.selection}
          onChange={props.handleSwitch}
        />
        <label className="custom-control-label" htmlFor={props.name}>
          {props.title}
        </label>
      </div>
    </div>
  );
}
