import React from "react";
import FormComponent from "./components/FormComponent";
import TimerWithRef from "./components/TimerWithRef";
import TimerWithoutRef from "./components/TimerWithoutRef";
import UsersDynamicSearch from "./components/UsersDynamicSearch";

const App = () => {
  const formConfig = [
    {
      elementType: "text",
      name: "username",
      label: "Username",
    },
    {
      elementType: "radio",
      name: "gender",
      label: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      elementType: "checkbox",
      name: "hobbies",
      label: "Hobbies",
      options: [
        { value: "reading", label: "Reading" },
        { value: "traveling", label: "Traveling" },
        { value: "coding", label: "Coding" },
      ],
    },
    {
      elementType: "select",
      name: "country",
      label: "Country",
      options: [
        { value: "india", label: "India" },
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
  };

  return (
    <div>
      {/* <div style={{ display: "none" }}>
        <FormComponent formConfig={formConfig} onSubmit={handleSubmit} />
      </div>
      <TimerWithoutRef />
      <TimerWithRef /> */}
      <UsersDynamicSearch />
    </div>
  );
};

export default App;
