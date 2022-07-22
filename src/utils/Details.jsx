import React, { useState } from "react";
import "../styles/registration.css";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Details = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section className="px-7 pt-5 ">
      <label className="my-3 w-auto block">
        <p className="registration-input-label">First Name</p>

        <input
          type="text"
          className="registration-input"
          name="name"
          value={firstName}
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label className="my-3 w-auto block">
        <p className="registration-input-label">Last Name</p>

        <input
          type="text"
          className="registration-input"
          name="name"
          value={lastName}
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label className="my-3 w-auto block">
        <p className="registration-input-label">Email </p>

        <input
          type="text"
          className="registration-input"
          name="email"
          value={email}
          placeholder="yourmail@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>{" "}
      <div className="mt-10">
        <PrimaryButton>Next</PrimaryButton>
      </div>
    </section>
  );
};

export default Details;
