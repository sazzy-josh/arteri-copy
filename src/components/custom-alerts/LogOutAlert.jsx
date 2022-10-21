import React from "react";
import axios from "axios";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

const LogOutAlert = ({ modalTrigger, setModalTrigger, buttonHandle }) => {
  // contexts
  const {
    setIsContentLoading,
    setIsLogOutModalOpen,
    setAlertProps,
    setIsAlertOpen,
  } = useContext(ModalContext);
  let navigate = useNavigate();

  const logOutUser = async () => {
    setIsLogOutModalOpen(false);
    setIsContentLoading(true);
    let loggedInToken;
    // post formData to server
    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/account/log-out/here`,
        {},
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      setIsContentLoading(false);

      // client received a success response (2xx)
      // clear browser storage
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
      localStorage.removeItem("accountType");
      sessionStorage.removeItem("accountType");

      navigate("/login", { replace: true });
    } catch (err) {
      setIsContentLoading(false);

      if (err.response) {
        console.log("data", err.response?.data?.data?.flash_message);
        // client received an error response (5xx, 4xx)
        setAlertProps((prev) => ({
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data.data.flash_message,
        }));
        setIsAlertOpen(true);
      }
    }
  };
  return (
    <>
      <div className={`logout-modal fixed z-50 top-0 left-0 w-screen h-screen`}>
        <div className=" opacity-50 bg-black w-screen h-screen"></div>
        <div className="absolute z-50 bg-white rounded-lg py-10 px-5 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[600px] md:py-28 md:px-10">
          <p className="text-black font-semibold capitalize text-[22px]  mb-9  text-center md:text-3xl md:mb-12">
            Are you sure you want <br /> to logout?
          </p>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <button
              className="border-2 border-[#DE4307] text-[#DE4307] font-medium w-full h-14 rounded-lg  cursor-pointer md:w-44 hover:bg-[#FEEDE6] transition duration-200"
              onClick={logOutUser}
            >
              Yes, Logout
            </button>
            <button
              className=" text-white bg-secondary font-medium w-full h-14 rounded-lg  cursor-pointer md:w-44 hover:bg-[#577E2A] transition duration-200"
              onClick={() => setIsLogOutModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutAlert;
