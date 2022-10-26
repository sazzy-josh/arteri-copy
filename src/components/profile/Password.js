import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import TextField from "../forms/text/TextField";
import Axios from "axios";
import { ModalContext } from "../../contexts/ModalContext";

const Password = ({ handleAccept }) => {
  // preloader contexts
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [values, setValues] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  // control input fields on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // setRecoverInpuField({ ...recoverInputField, [name]: value });
    // validateInputChange(e, recoverInputField);
  };

  const changePassword = () => {
    let formData = new FormData();
    formData.append("current_password", values.current_password);
    formData.append("new_password", values.new_password);
    formData.append(
      "new_password_confirmation",
      values.new_password_confirmation
    );

    const authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    return Axios.post(
      `${process.env.REACT_APP_BASE_URI}/account/password/change`,
      formData,
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
  };

  // Queries
  const { mutate, data, isLoading, isError } = useMutation(changePassword, {
    staleTime: Infinity,

    onSuccess: (data) => {
      // alert("succesfull");
      setIsContentLoading(false);
      setAlertProps((prev) => ({
        ...prev,
        type: "success",
        title: "Congratulation!",
        subtitle: data?.data?.data?.flash_message,
      }));
      setIsAlertOpen(true);
    },
    onError: (error) => {
      setIsContentLoading(false);
      setAlertProps((prev) => ({
        ...prev,
        type: "fail",
        title: "Ooops! Sorry",
        subtitle: error?.response?.data?.data?.flash_message,
      }));
      setIsAlertOpen(true);
    },
    onMutate: () => setIsContentLoading(true),
  });

  return (
    <div className="w-full my-5">
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <label className="lg:w-[412px] w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-semibold mb-4">Old Password</p>
          <div className="relative ">
            {/* {oldPassword ? (
              <TextField type="password" />
            ) : (
              <TextField type="text" />
            )} */}
            <TextField
              type={showOldPassword ? "text" : "password"}
              changeText={handleInputChange}
              name={"current_password"}
            />
            <span
              className="absolute top-7 -right-2 cursor-pointer "
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {!showOldPassword ? (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.42004 19.5299C9.56004 20.0099 10.77 20.2699 12 20.2699C15.53 20.2699 18.82 18.1899 21.11 14.5899C22.01 13.1799 22.01 10.8099 21.11 9.39993C20.78 8.87993 20.42 8.38993 20.05 7.92993"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </label>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <label className="lg:w-[412px] w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-semibold mb-4">New Password</p>
          <div className="relative ">
            <TextField
              type={showNewPassword ? "text" : "password"}
              name={"new_password"}
              changeText={handleInputChange}
            />

            <span
              className="absolute top-7 -right-2 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {!showNewPassword ? (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.42004 19.5299C9.56004 20.0099 10.77 20.2699 12 20.2699C15.53 20.2699 18.82 18.1899 21.11 14.5899C22.01 13.1799 22.01 10.8099 21.11 9.39993C20.78 8.87993 20.42 8.38993 20.05 7.92993"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </label>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <label className="lg:w-[412px] w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-semibold mb-4">Confirm Password</p>
          <div className="relative ">
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              name={"new_password_confirmation"}
              changeText={handleInputChange}
            />

            <span
              className="absolute top-7 -right-2 cursor-pointer px-2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {!showConfirmPassword ? (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="show-hide-password"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.42004 19.5299C9.56004 20.0099 10.77 20.2699 12 20.2699C15.53 20.2699 18.82 18.1899 21.11 14.5899C22.01 13.1799 22.01 10.8099 21.11 9.39993C20.78 8.87993 20.42 8.38993 20.05 7.92993"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </label>
      </div>

      <div className="w-full flex flex-row justify-between items-center">
        <div></div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/3 w-full">
          <div className="lg:w-[229px] w-full lg:mr-5 md:mr-1">
            <div className="w-full h-14">
              <PrimaryButton
                handle={() => {
                  mutate();
                }}
              >
                Change Password
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
