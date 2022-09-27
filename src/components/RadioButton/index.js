import React from "react";

const RadioButton = ({ options = [], selectedOption, onValueChange }) => (
  <>
    {options.map((option) => (
      <label key={option} className="radio-button">
        <input
          type="radio"
          value={option}
          checked={selectedOption === option}
          onChange={onValueChange}
        />
        {option}
      </label>
    ))}
  </>
);

export default RadioButton;
