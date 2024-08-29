import React, { useState } from "react";

const UsersDynamicSearch = () => {
  const [names, setNames] = useState([
    "Sai",
    "John",
    "Doe",
    "Deepu",
    "Dinesh",
    "Stella",
    "Vani",
    "Kumar",
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleUserSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUserNames = names.filter((name) =>
    name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleUserSearch}
      />

      <section>
        <ul>
          {filteredUserNames.map((user) => (
            <li>{user}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UsersDynamicSearch;
