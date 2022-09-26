import React from "react";

const Input = ({ label, value, onValueChange }) => (
  <div className="input-container">
    <label className="label">{`${label}:`}</label>
    <input type="text" name={label} />
  </div>
);

export default Input;
