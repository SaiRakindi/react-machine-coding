import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

const FormAutoSave = () => {
  const [userData, setUserData] = useState({ username: "", email: "" });

  const saveData = () => {
    console.log("Auto saving the user data : ", userData);
  };

  useEffect(() => {
    let formHandler = setTimeout(() => {
      saveData(userData);
    }, 1000);

    return () => {
      clearTimeout(formHandler);
    };
  }, [userData]);

  const handleUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="user-details-form-section">
      <form className="form-section">
        <div className="label-input-section">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            placeholder="Enter username"
            onChange={handleUserData}
          />
        </div>
        <div className="label-input-section">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Enter username"
            onChange={handleUserData}
          />
        </div>
      </form>
    </div>
  );
};

export default FormAutoSave;
