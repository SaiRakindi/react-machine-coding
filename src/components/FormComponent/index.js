import React, { useState } from "react";
import FormElement from "./FormElement";

const FormComponent = ({ formConfig, onSubmit }) => {
  const [formData, setFormData] = useState(
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.elementType === "checkbox" ? [] : "";
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <FormElement
          key={field.name}
          elementType={field.elementType}
          name={field.name}
          label={field.label}
          options={field.options || []}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
