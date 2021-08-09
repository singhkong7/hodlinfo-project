import React from 'react';
import "./toggle.scss";

class Toggle extends React.Component {
  render() {
    return (
      <div className="toggle-switch" >
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}
export default Toggle;
