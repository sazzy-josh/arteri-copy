import React, { useState, useEffect, useContext } from "react";
import ProfilePic from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "../forms/text/TextField";
import StatusBar from "../status/StatusBar";
import SelectField from "../forms/text/SelectField";
import Preloader from "../Preloader";
import PrimaryButton from "../buttons/PrimaryButton";
import image from "../../assets/images/image-1.jpg";
import { ModalContext } from "../../contexts/ModalContext";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import Axios from "axios";
import axios from "axios";

import FemaleAvatar from "../../assets/images/Arteri_Avatar_Female.jpg";
import MaleAvatar from "../../assets/images/Arteri_Avatar_Male.jpg";

const Profile = () => {
  // preloader contexts
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    account_type: "",
    date_of_birth: "",
    gender: "",
    photo_file: "",
    province_name: "",
    city_name: "",
    line_one: "",
    line_two: "",
    country_name: "",
    province_code: "",
    country_code: "",
    city_code: "",
  });
  const [updatePicture, setUpdatePicture] = useState(false);

  useEffect(() => {
    if (updatePicture) {
      console.log("run useEffect");
      handleEdit();
    }
  }, [updatePicture]);

  const handleEdit = (e) => {
    // e.preventDefault();
    console.log("editing request", profile);
    editUserProfile.mutate(profile);
  };

  const fetchUserProfile = () => {
    const authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    return axios.get(`${process.env.REACT_APP_BASE_URI}/user/profile/get`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
  };

  // Queries
  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery(["user-profile"], fetchUserProfile, {
    onSuccess: (response) => {
      setProfile({
        first_name:
          response?.data?.data?.user_profile?.extended_details
            ?.personal_information?.first_name,
        last_name:
          response?.data?.data?.user_profile?.extended_details
            ?.personal_information?.last_name,
        email: response?.data?.data?.user_profile?.email,
        phone: response?.data?.data?.user_profile?.phone,
        account_type: response?.data?.data?.user_profile?.account_type,
        date_of_birth:
          response?.data?.data?.user_profile?.extended_details
            ?.personal_information?.date_of_birth,
        gender:
          response?.data?.data?.user_profile?.extended_details
            ?.personal_information?.gender,
        photo_file:
          response?.data?.data?.user_profile?.extended_details
            ?.personal_information?.photo_file,
        province_name:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.province_name,
        city_name:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.city_name,
        line_one:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.line_one,
        line_two:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.line_two,
        province_code:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.province_code,
        country_name:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.country_name,
        country_code:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.country_code,
        city_code:
          response?.data?.data?.user_profile?.extended_details
            ?.address_information?.city_code,
      });
    },
    onError: (error) => {
      setAlertProps((prev) => ({
        ...prev,
        type: "fail",
        title: "Ooops! Sorry",
        subtitle: error?.response?.data?.data?.flash_message,
      }));
      setIsAlertOpen(true);
    },
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // staleTime: Infinity,
  });

  //handles fetching of state data
  const handleFetchState = () => {
    const authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    return axios.get(
      `${process.env.REACT_APP_BASE_URI}/fetch/provinces?country=NG`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
  };

  const genderList = ["Male", "Female"];

  //Query for  state data
  const { data } = useQuery(["fetch-states"], handleFetchState, {
    onSuccess: (data) => {
      let result = data?.data?.data?.provinces;
      setProvinces([...result]);
    },
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    staleTime: Infinity,
  });

  //handles input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  //handles file input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    console.log("camera icon clicked", file);
    if (file) {
      setProfile({
        ...profile,
        photo_file: file,
        check: true,
      });
      setUpdatePicture(true);
      console.log("set profile", profile);
      console.log("file name", file.name);
    }
  };

  // handles updating of profile
  const handleUpdateProfile = (profile) => {
    let formData = new FormData();
    formData.append("first_name", profile?.first_name);
    formData.append("last_name", profile?.last_name);
    formData.append("gender", profile?.gender);
    formData.append("date_of_birth", profile?.date_of_birth);
    formData.append("city_code", profile?.city_code);
    formData.append("city_name", profile?.city_name);
    formData.append("line_one", profile?.line_one);
    formData.append("line_two", profile?.line_two);
    formData.append("province_name", profile?.province_name);
    formData.append("province_code", profile?.province_code);
    formData.append("country_code", profile?.country_code);
    formData.append("country_name", profile?.country_name);
    formData.append("photo_file", profile?.photo_file);

    let authToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    return axios.post(
      `${process.env.REACT_APP_BASE_URI}/user/profile/update`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
  };

  // mutation

  const editUserProfile = useMutation(handleUpdateProfile, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("user-profile");
      setIsContentLoading(false);
      setAlertProps((prev) => ({
        ...prev,
        type: "success",
        title: "Congratulation!",
        subtitle: data?.data?.data?.flash_message,
      }));
      setIsAlertOpen(true);
      setEdit(false);
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
    <>
      <div className="w-full my-5">
        <div className="w-full flex flex-col lg:flex-row justify-start items-center">
          {/* User Image goes here */}
          <div className="lg:w-1/4 w-full lg:block lg:flex-col lg:justify-start lg:items-center flex flex-col justify-center items-center ">
            {/* <p className="font-semibold text-center bg-red-300 text-white w-full">
              {JSON.stringify(updatePicture)}
            </p> */}

            {/* Image Container */}
            <div className="rounded-full w-[171px] h-[171px]">
              <img
                className="object-cover rounded-full w-full h-full drop-shadow-sm"
                src={
                  userProfile?.data?.data?.user_profile?.extended_details
                    ?.personal_information?.photo_file ||
                  (userProfile?.data?.data?.user_profile?.extended_details?.personal_information?.gender?.toLowerCase() ===
                  "male"
                    ? MaleAvatar
                    : FemaleAvatar)
                }
                alt="arteri-profile-photo"
              />
            </div>
            <label>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                name="photo_file"
                onChange={handleFileInputChange}
              />
              <div className="relative lg:bottom-16 lg:left-24 bottom-12 left-14 flex items-center justify-center shadow-sm cursor-pointer object-contain w-12 h-12 bg-white rounded-full  hover:bg-[#E6F2D9] transition">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 8H13.5"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </label>
          </div>
          {!edit ? (
            <div className="w-full flex flex-col justify-start items-center">
              {/* Section that displays FirstName, LastName ,Gender and Edit button */}
              <div className="flex lg:flex-row flex-col lg:justify-between lg:-mt-4 lg:items-start justify-start items-start lg:text-center text-left text-lg w-full">
                <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                  <p className="font-medium text-[#4D4D4D]">First Name</p>
                  <p className="text-black font-medium capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.first_name || "----"}
                  </p>
                </div>
                <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                  <p className="font-medium text-[#4D4D4D]">Last Name</p>
                  <p className="text-black font-medium capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.last_name || "----"}
                  </p>
                </div>
                <div className="hidden lg:w-1/4 w-full lg:text-left lg:flex lg:flex-col gap-y-4">
                  <p className="font-medium text-[#4D4D4D] ">Gender</p>
                  <p className="text-black font-medium capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.gender || "----"}
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
                  <span className="text-[#4D4D4D] font-medium">FirstName</span>
                  <TextField
                    changeText={handleInput}
                    value={profile?.first_name}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">LastName</span>
                  <TextField
                    changeText={handleInput}
                    value={profile?.last_name}
                    type="text"
                    name="last_name"
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
                    changeText={handleInput}
                    value={profile?.date_of_birth}
                    type="date"
                    name="date_of_birth"
                  />
                </div>
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">Gender</span>
                  <div className="flex flex-1 bg-transparent flex-row justify-start border-2 border-[#808080] rounded-md items-start px-4 py-2 h-14 w-full">
                    <select
                      onChange={handleInput}
                      name="gender"
                      className="w-full h-full bg-transparent focus:outline-none focus:border-0 border-0"
                      defaultValue={profile?.gender}
                    >
                      {genderList.map((gender, index) => {
                        return (
                          <option key={index} value={gender}>
                            {gender}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">
                    Address Line 1
                  </span>
                  <TextField
                    changeText={handleInput}
                    value={profile?.line_one}
                    type="text"
                    name="line_one"
                  />
                </div>
              </div>
              <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full my-10 gap-x-11 gap-y-7">
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">
                    Address Line 2
                  </span>
                  <TextField
                    changeText={handleInput}
                    value={profile?.line_two}
                    type="text"
                    name="line_two"
                  />
                </div>
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">City</span>
                  <TextField
                    changeText={handleInput}
                    value={profile?.city_name}
                    type="text"
                    name="city_name"
                  />
                </div>
                <div className="lg:w-80 w-full flex flex-col gap-y-4">
                  <span className="text-[#4D4D4D] font-medium">State</span>
                  <div className="flex flex-1 bg-transparent flex-row justify-start border-2 border-[#808080] rounded-md items-start px-4 py-2 h-14 w-full">
                    <select
                      onChange={handleInput}
                      name="province_name"
                      className="w-full h-full bg-transparent focus:outline-none focus:border-0 border-0"
                      defaultValue={profile?.province_name}
                    >
                      {provinces?.map((state, index) => {
                        return (
                          <option key={index} value={state.name}>
                            {state.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row lg:justify-end lg:items-end justify-center items-center">
                <div className="lg:w-48 h-14 w-full lg:mr-20">
                  <PrimaryButton handle={handleEdit}>
                    <span className="text-white text-center">Save Changes</span>
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
              <div className="lg:hidden flex flex-col text-left gap-y-8 my-4">
                <div className="flex flex-col gap-y-4">
                  <p className="text-base font-medium text-[#4D4D4D]">
                    First Name
                  </p>
                  <p className="text-black font-medium capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.first_name || "----"}
                  </p>
                </div>

                <div className="flex flex-col gap-y-4">
                  <p className="text-base font-medium text-[#4D4D4D]">
                    Last Name
                  </p>
                  <p className="text-black font-medium capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.last_name || "----"}
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
                    {userProfile?.data?.data?.user_profile?.account_type ||
                      "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">Email Address</p>
                  <p className="font-medium text-black ">
                    {userProfile?.data?.data?.user_profile?.email || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">Phone Number</p>
                  <p className="font-medium text-black capitalize">
                    {userProfile?.data?.data?.user_profile?.phone || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">Date of birth</p>
                  <p className="font-medium text-black capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.personal_information?.date_of_birth || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">State</p>
                  <p className="font-medium text-black capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.address_information?.province_name || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">City</p>
                  <p className="font-medium text-black capitalize">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.address_information?.city_name || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3  text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">Address Line 1</p>
                  <p className="text-black font-medium ">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.address_information?.line_one || "----"}
                  </p>
                </div>

                <div className="lg:w-1/3 text-left flex flex-col gap-y-4">
                  <p className="text-[#4D4D4D] font-medium">Address Line 2</p>
                  <p className="text-black font-medium ">
                    {userProfile?.data?.data?.user_profile?.extended_details
                      ?.address_information?.line_two || "----"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
