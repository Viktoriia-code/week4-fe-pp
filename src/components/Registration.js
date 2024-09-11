import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const registrationInformation = {
      name,
      email,
      password,
    };

    console.log(registrationInformation);

    // Reset the form state.
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Password:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
