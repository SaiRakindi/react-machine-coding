import React, { useEffect, useState } from "react";

const DynamicCheckboxCounter = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
    { id: 4, label: "Checkbox 4", checked: false },
  ]);

  const [selectAllActive, setSelectAllActive] = useState(false);

  const handleOnChangeCheck = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    const allChecked = updatedCheckboxes.every(
      (checkbox) => checkbox.checked === true
    );
    setSelectAllActive(allChecked);
    setCheckboxes(updatedCheckboxes);
  };

  const renderCheckBoxesCount = (count = false) => {
    const filterdCheckboxex = checkboxes.filter(
      (checkbox) => checkbox.checked === true
    );
    if (count) {
      return filterdCheckboxex.length;
    }
    return filterdCheckboxex;
  };

  const renderSelectedCheckboxes = () => {
    return checkboxes.filter((checkbox) => checkbox.checked === true);
  };

  const handleSelectAll = () => {
    const selectedAllCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: true,
    }));

    setCheckboxes(selectedAllCheckboxes);
    setSelectAllActive(!selectAllActive);
  };

  return (
    <div>
      {checkboxes.map((checkboxItem) => (
        <div>
          <label>
            <input
              key={checkboxItem.id}
              type="checkbox"
              value={checkboxItem.id}
              checked={checkboxItem.checked}
              onChange={() => handleOnChangeCheck(checkboxItem.id)}
            />
            {checkboxItem.label}{" "}
          </label>
        </div>
      ))}

      <button onClick={handleSelectAll} disabled={selectAllActive}>
        {!selectAllActive ? `Select All` : `All selected`}
      </button>

      <p>Selected : {renderCheckBoxesCount(true)}</p>

      <div>
        {renderSelectedCheckboxes().map((checkbox) => (
          <p key={checkbox.label}>{checkbox.label}</p>
        ))}
      </div>
    </div>
  );
};

export default DynamicCheckboxCounter;
