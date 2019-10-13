import React from 'react';

const Toggle = ({ checked}) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
