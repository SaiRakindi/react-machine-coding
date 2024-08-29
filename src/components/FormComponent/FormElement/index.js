import React from "react";

const FormElement = ({
  elementType,
  name,
  label,
  options,
  value,
  onChange,
}) => {
  switch (elementType) {
    case "text":
      return (
        <div>
          <label>{label}</label>
          <input
            type="text"
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </div>
      );
    case "radio":
      return (
        <div>
          <label>{label}</label>
          {options.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
              {option.label}
            </div>
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>{label}</label>
          {options.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={(e) => {
                  const newValue = e.target.checked
                    ? [...value, option.value]
                    : value.filter((v) => v !== option.value);
                  onChange(e.target.name, newValue);
                }}
              />
              {option.label}
            </div>
          ))}
        </div>
      );

    case "select":
      return (
        <div>
          <label>{label}</label>
          <select
            name={name}
            value={value}
            onChange={(event) => {
              onChange(event.target.name, event.target.value);
            }}
          >
            <option>Please select a country</option>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

export default FormElement;
