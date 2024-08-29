import React, { useState } from "react";

const DynamicTextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const onSubmitText = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      setSubmittedValues([...submittedValues, inputValue]);
    }

    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmitText}>
        <input
          type="text"
          placeholder="Enter a text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <section>
        <ul>
          {submittedValues.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DynamicTextInput;
