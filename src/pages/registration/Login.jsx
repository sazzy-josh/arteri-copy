import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <>
      <MobileNavbar />
      <section className="px-7 py-7">
        <h1 className="font-semibold text-3xl text-left text-gray-900 mb-14">
          Welcome back <br /> to Arteri
        </h1>
        <label className="mb-5 block">
          <p className="registration-input-label">Email Address</p>

          <input
            type="email"
            className="registration-input"
            name="email"
            placeholder="yourmail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="mb-5 block">
          <p className="registration-input-label"> Password</p>

          <input
            type="password"
            className="registration-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p
          className="text-right text-secondary font-medium my-5"
          onClick={() => {
            navigate("/forgot-password", { replace: true });
          }}
        >
          Forgot password?
        </p>
        <PrimaryButton>Login into account</PrimaryButton>
        <RegistrationRedirect2 />
      </section>
    </>
  );
};

export default Login;
