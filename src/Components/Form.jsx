import React, { useState, useCallback } from "react";

const Form = React.memo(({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit({ name, email, password });
    },
    [name, email, password, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ color: "blueviolet" }}>
        Name:
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label style={{ color: "blueviolet" }}>
        Email:
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label style={{ color: "blueviolet" }}>
        Password:
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
});

export default Form;
