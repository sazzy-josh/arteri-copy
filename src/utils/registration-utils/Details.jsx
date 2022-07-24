import React, { useState, useContext, useEffect } from "react";
import "../../styles/registration.css";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import RegistrationRedirect from "./RegistrationRedirect";
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";
const Details = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState("");
  const { accountType } = useContext(RegistrationContext);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <>
      <section className="px-7 py-3">
        <label className="mb-5  block ">
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
        <label className="mb-5 block">
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
        <label className="mb-5 block">
          <p className="registration-input-label">Email Address</p>

          <input
            type="text"
            className="registration-input"
            name="email"
            value={email}
            placeholder="yourmail@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="mb-5 block">
          <p className="registration-input-label">Phone Number </p>
          <div className="w-full h-14 border rounded-xl my-3 block mx-auto  border-gray-400 outline-none">
            <select
              name="country-code"
              className=" bg-transparent w-1/4 h-full p-[2px] text-sm font-medium text-black border-r border-gray-400 outline-none "
            >
              <option value="Nigeria">+234</option>
              {countries &&
                countries.map((item, index) => (
                  <option value={item.name} key={index}>
                    +{item.callingCodes[0]}
                  </option>
                ))}
            </select>
            <input
              type="tel"
              className=" px-4 w-3/4 h-full bg-transparent  outline-none "
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </label>

        <div className="mt-10 mb-5">
          <PrimaryButton
            handle={() => navigate("/register/details-2", { replace: true })}
          >
            Next
          </PrimaryButton>
        </div>
      </section>
      <RegistrationRedirect />
      <p className="py-2 px-3 mb-3 inline-block rounded-xl bg-blue-100 text-gray-400 font-medium">
        Account Type:{" "}
        <span className="text-primary capitalize ml-1">{accountType} </span>
      </p>
    </>
  );
};

export default Details;
