import React, { useState, useEffect } from "react";
import CamIcon from "../../assets/icons/camera.svg";
import ProfilePic from "../../assets/images/profile.png";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "../forms/text/TextField";
import StatusBar from "../status/StatusBar";
import SelectField from "../forms/text/SelectField";
import Preloader from "../Preloader";
import PrimaryButton from "../buttons/PrimaryButton";

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const fetchUserProfile = () => {
    const authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    return Axios.get(`${process.env.REACT_APP_BASE_URI}/user/profile/get`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
  };

  // Queries
  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery(["user-profile"], fetchUserProfile);
  console.log("profile is: ", userProfile);

  // --------------------------
  // --------------------------
  // --------------------------

  const [user, setUser] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [street, setStreet] = useState(
    user.extended_details && user.extended_details.address_information.street
  );
  const [city, setCity] = useState(
    user.extended_details && user.extended_details.address_information.city_name
  );
  const [province, setProvince] = useState(
    user.extended_details &&
      user.extended_details.address_information.province_name
  );
  const [gender, setGender] = useState(
    user.extended_details && user.extended_details.personal_information.gender
  );
  const [dob, setDob] = useState(
    user.extended_details &&
      user.extended_details.personal_information.date_of_birth
  );
  const genderList = "tet";
  const statesList = "tet";

  // --------------------------
  // --------------------------
  // --------------------------

  const updateProfile = async () => {
    // setLoading(true);
    const accessToken = localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : sessionStorage.getItem("authToken");
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer " + accessToken);

      const extendedDetails = `{"address_information":{"street":${street},"line_one":"qqq","line_two":"","city_code":"","city_name":${city},"postal_code":"","country_code":"NG","country_name":"Nigeria","province_code":"hh","province_name":${province}},"personal_information":{"gender":${gender},"photo_file":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABx0lEQVRYhe2Wzy6DQRTFf6EspLFpNFZiq+JP4k8QL6QPwBIJO9SfJW/AQmLpLUh5ABYsEdpGpRZzJiaj39cZPrHpSWZz77n3nPl6Z6bQRRfxKAGHQBV41aoqNvaXwn3AHvABtBLWB7AD5LIWzwEXEqkBFWAWGNCaA/aBujjnQG+WBrbU+A6YSOFNAvfibmYlPorZWa2DuMWUuHVgJAsDG5gd7UfUHKpm/TfCPcAa0FCz+TYcO3w+5hVvAKvqFS1+piZN4Ij2k51kIKeapvKnsSa2VfgAzKTwkgxYzAKP4myFio9jnNfVwMUKUIwwAOaINtSzFGLADtCxFy8rfu2YCDEAcCLeQYiBG5GXvHhR4q4J30AR85V8LItXDTHwJnKhTc434Rpwc2WvrqD4a4iBZ5HzCfkh4MoRb3mxW2DYqxlU7inEQJXkc2/h7tb9Gu58uFhw8h1RIWxg3BlIEwdzJ7SA3RAD7jGc6sANEZ8m8hjC11G862DCGkgTt69jzFtCH3CpwroMLfB9MNvdA3lgEfPZ7TtyqZ5R6Jewvc/Tlm/IrnfMzqPFXYxj/opdAy8BBl7E3SXiN/8pQq/iRES/01nj3w100cUnxYCu18tflJUAAAAASUVORK5CYII=","date_of_birth":${dob}},"miscellaneous_information":{"mono_account_id":""}}`;

      var formdata = new FormData();
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastName);
      formdata.append("extended_details", JSON.stringify(extendedDetails));

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/user/profile/update`,
        requestOptions
      );
      const data = await response.json();
      console.log("Update", data);
      if (data.status === "success") {
        toast.success(data.message);
        setEdit(!edit);
        setLoading(false);
      } else {
        toast.error(data.flash_message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const states = async () => {
  //   // setLoading(true);
  //   const accessToken = localStorage.getItem("authToken")
  //     ? localStorage.getItem("authToken")
  //     : sessionStorage.getItem("authToken");
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BASE_URI}/fetch/provinces?country=NG`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + accessToken,
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     if (data.status === "success") {
  //       setProvinces(data.data.provinces);
  //       setLoading(false);
  //     } else {
  //       toast.error("States cannot be fetched!");
  //       setLoading(false);
  //     }
  //     console.log("states", data);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // const profile = async () => {
  //   // setLoading(true);
  //   const accessToken = localStorage.getItem("authToken")
  //     ? localStorage.getItem("authToken")
  //     : sessionStorage.getItem("authToken");
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BASE_URI}/user/profile/get`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer" + accessToken,
  //         },
  //       }
  //     );
  //     console.log("Profile", response);
  //     const data = await response.json();
  //     if (data.status === "success") {
  //       setUser(data.data.user_profile);
  //       setLoading(false);
  //     } else {
  //       toast.error("User Profile cannot be fetched!");
  //       setLoading(false);
  //     }
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   profile();
  //   states();
  // }, []);

  // const genders = [
  //   {
  //     name: "Male",
  //     value: "male",
  //   },
  //   {
  //     name: "Female",
  //     value: "female",
  //   },
  // ];

  // const genderList =
  //   genders.length > 0 &&
  //   genders.map((item, i) => {
  //     return (
  //       <option key={i} value={item.value}>
  //         {item.name}
  //       </option>
  //     );
  //   });

  // const statesList =
  //   provinces.length > 0 &&
  //   provinces.map((item, i) => {
  //     return <option value={item.province_code}>{item.province_name}</option>;
  //   });

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="w-full my-5">
          <div className="w-full flex flex-col lg:flex-row justify-start items-center">
            <div className="lg:w-1/4 w-full lg:block lg:flex-col lg:justify-start lg:items-center flex flex-col justify-center items-center">
              <img
                className="rounded-full"
                src={ProfilePic}
                width="171px"
                height="171px"
                alt="Profile-Pics"
              />
              <img
                className="relative z-10 lg:bottom-16 lg:left-24 bottom-12 left-14 cursor-pointer object-contain"
                src={CamIcon}
                width="46px"
                height="46px"
                alt="Camera-icon"
              />
            </div>
            {!edit ? (
              <div className="w-full flex flex-col justify-start items-center">
                {/* Section that displays FirstName, LastName ,Gender and Edit button */}
                <div className="flex lg:flex-row flex-col lg:justify-between lg:-mt-4 lg:items-start justify-start items-start lg:text-center text-left text-lg w-full">
                  <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                    <p className="font-medium text-[#4D4D4D]">First Name</p>
                    <p className="text-black font-medium capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.first_name ?? "----"}
                    </p>
                  </div>
                  <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                    <p className="font-medium text-[#4D4D4D]">Last Name</p>
                    <p className="text-black font-medium capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.last_name ?? "----"}
                    </p>
                  </div>
                  <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                    <p className="font-medium text-[#4D4D4D] ">Gender</p>
                    <p className="text-black font-medium capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.gender ?? "----"}
                    </p>
                  </div>
                  <div className="lg:w-1/4 w-full flex items-center lg:text-left ">
                    <div className="w-full h-14 lg:w-[166px]">
                      <PrimaryButton handle={() => setEdit(!edit)}>
                        <span className="text-white text-center">
                          Edit Profile
                        </span>
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Section that conditionally renders and dipslays text-field for First name and Last name
              <div className="w-full">
                <div className="text-left flex lg:flex-row flex-col gap-y-8 justify-start items-center w-full">
                  <div className="lg:mr-10 lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">
                      FirstName
                    </span>
                    <TextField
                      changeText={(e) => setFirstName(e.target.value)}
                      value={user.first_name || "Bello"}
                      type="text"
                    />
                  </div>
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">LastName</span>
                    <TextField
                      changeText={(e) => setLastName(e.target.value)}
                      value={user.last_name || " Abdulkudus"}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Section that conditonally render the Personal details edit field if edit is true else render the data page */}
          {edit && (
            <>
              <div
                className={`my-8 mb-5 lg:mt-5 block ${
                  !edit ? "lg:hidden" : "lg:block"
                }`}
              >
                <p className="font-semibold lg:text-2xl text-left text-black">
                  Personal Details
                </p>
              </div>
              <div>
                <div className="text-left flex flex-col lg:flex-row justify-start items-center w-full gap-x-11 gap-y-7 ">
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">
                      Date of Birth
                    </span>
                    <TextField
                      changeText={(e) => setDob(e.target.value)}
                      value={
                        user.extended_details &&
                        user.extended_details.personal_information.date_of_birth
                      }
                      type="date"
                    />
                  </div>
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">Gender</span>
                    <SelectField
                      changeText={(e) => setGender(e.target.value)}
                      value={
                        user.extended_details &&
                        user.extended_details.personal_information.gender
                      }
                      type="text"
                      optionList={genderList}
                    />
                  </div>
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">
                      Address Line 1
                    </span>
                    <TextField
                      changeText={(e) => setStreet(e.target.value)}
                      value={
                        user?.extended_details?.address_information
                          ?.city_name || "20, Otunda Street Rumuagholu"
                      }
                      type="text"
                    />
                  </div>
                </div>
                <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full my-10 gap-x-11 gap-y-7">
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">
                      Address Line 2
                    </span>
                    <TextField
                      changeText={(e) => setStreet(e.target.value)}
                      value={
                        user?.extended_details?.address_information?.street ||
                        " 20, Otunda Street Rumuagholu"
                      }
                      type="text"
                    />
                  </div>
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">City</span>
                    <TextField
                      changeText={(e) => setCity(e.target.value)}
                      value={
                        user?.extended_details?.address_information
                          ?.city_name || "Lagos"
                      }
                      type="text"
                    />
                  </div>
                  <div className="lg:w-80 w-full flex flex-col gap-y-4">
                    <span className="text-[#4D4D4D] font-medium">State</span>
                    <SelectField
                      changeText={(e) => setProvince(e.target.value)}
                      value={
                        user.extended_details &&
                        user.extended_details.address_information.province_name
                      }
                      type="text"
                      optionList={statesList}
                    />
                  </div>
                </div>
                <div className="flex flex-row lg:justify-end lg:items-end justify-center items-center">
                  <div className="lg:w-48 h-14 w-full lg:mr-20">
                    <PrimaryButton handle={updateProfile}>
                      <span className="text-white text-center">
                        Save Changes
                      </span>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Section that handles Personal details segment */}
          {!edit ? (
            <div>
              <div className="w-full flex flex-col justify-start items-start my-10">
                {/*  Section that shows only First name and Lastname on small screens */}
                <div className="lg:hidden flex flex-col text-left gap-y-4 my-4">
                  <div className="flex flex-col gap-y-4">
                    <p className="text-base font-medium text-[#4D4D4D]">
                      First Name
                    </p>
                    <p className="text-black font-medium capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.first_name ?? "----"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <p className="text-base font-medium text-[#4D4D4D]">
                      Last Name
                    </p>
                    <p className="text-black font-medium capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.last_name ?? "----"}
                    </p>
                  </div>
                </div>
                {/* Section that handles the personal details data */}
                <div className="lg:-mt-6 lg:mb-8 my-6">
                  <p className="font-semibold text-base lg:text-2xl">
                    Personal Details
                  </p>
                </div>
                <div className=" flex flex-col lg:flex lg:flex-row flex-wrap w-full gap-y-8 text-[18px]">
                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Account Type</p>
                    <p className="font-medium text-black capitalize">
                      {userProfile?.data?.data?.user_profile?.account_type ??
                        "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Email Address</p>
                    <p className="font-medium text-black ">
                      {userProfile?.data?.data?.user_profile?.email ?? "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Phone Number</p>
                    <p className="font-medium text-black capitalize">
                      {userProfile?.data?.data?.user_profile?.phone ?? "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Date of birth</p>
                    <p className="font-medium text-black capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.personal_information?.date_of_birth ?? "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">State</p>
                    <p className="font-medium text-black capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.address_information?.city_name ?? "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">City</p>
                    <p className="font-medium text-black capitalize">
                      {userProfile?.data?.data?.user_profile?.extended_details
                        ?.address_information?.city_name ?? "----"}
                    </p>
                  </div>

                  <div className="lg:w-1/3  text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Address Line 1</p>
                    <p className="font-medium text-black">
                      {user.account_type || " 20, Otunda Street Rumuagholu"}
                    </p>
                  </div>

                  <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                    <p className="text-[#4D4D4D] font-medium">Address Line 2</p>
                    <p className="font-medium text-black">
                      {user.account_type || "20, Otunda Street Rumuagholu "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Profile;
