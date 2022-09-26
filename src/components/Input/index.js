import React from "react";

const Input = ({ label, value, onChange }) => (
  <div className="input-container">
    <label className="label">{`${label}:`}</label>
    <input type="text" value={value} onChange={onChange} name={label} />
  </div>
);

export default Input;
