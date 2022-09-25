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

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
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

  const updateProfile = async () => {
    setLoading(true);
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

  const states = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : sessionStorage.getItem("authToken");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/fetch/provinces?country=NG`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );
     
      const data = await response.json();
      if (data.status === "success") {
        setProvinces(data.data.provinces);
        setLoading(false);
      } else {
        toast.error("States cannot be fetched!");
        setLoading(false);
      }
      console.log("states", data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const profile = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : sessionStorage.getItem("authToken");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/user/profile/get`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      console.log("Profile", response);
      const data = await response.json();
      if (data.status === "success") {
        setUser(data.data.user_profile);
        setLoading(false)
      } else {
        toast.error("User Profile cannot be fetched!");
        setLoading(false)
      }
      console.log("data", data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    profile();
    states();
  }, []);

  const genders = [
    {
      name: 'Male',
      value: 'male'
    },
    {
      name: 'Female',
      value: 'female'
    }
  ]

  const genderList = genders.length > 0 && genders.map((item, i) => {
    return (
      <option value={item.value}>{item.name}</option>
    )
  })

  const statesList = provinces.length > 0 && provinces.map((item, i) => {
    return (
      <option value={item.province_code}>{item.province_name}</option>
    )
  })

  return (
    <>
    {loading && <Preloader />}
      {!loading && <div className="w-full my-5">
        <div className="w-full flex flex-col lg:flex-row justify-start items-center">
          <div className="lg:w-1/4 w-full lg:block lg:flex-col lg:justify-start lg:items-center flex flex-col justify-center items-center">
            <img
              className="aboslute rounded-full"
              src={ProfilePic}
              width="171px"
              height="171px"
              alt="Profile Pics"
            />
            <img
              className="relative z-10 lg:bottom-16 lg:left-24 bottom-12 left-14 cursor-pointer"
              src={CamIcon}
              width="46px"
              height="46px"
              alt="Camera icon"
            />
          </div>
          {!edit ? (
            <div className="w-full flex flex-col justify-start items-center">
              <div className="flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center justify-center items-center text-lg w-full mb-5">
                <div className="lg:w-1/2 w-full">
                  <div className="text-left flex flex-row justify-start items-center lg:my-0 my-5">
                    <p className="font-semibold mr-2">Verification Status:</p>
                    {user.email_verified_at != "" &&
                    user.phone_verified_at != "" ? (
                      <StatusBar positive={true} text="Verified" />
                    ) : (
                      <StatusBar positive={false} text="Not Verified" />
                    )}
                  </div>
                </div>
                {/* <div className="lg:w-1/3 w-full">
                <div
                  onClick={() => navigate("/account/verification")}
                  className="rounded-xl border border-green-500 bg-green-50 hover:bg-green-100 text-green-500 px-2 cursor-pointer py-1 text-center"
                >
                  <span>Verify account</span>
                </div>
                </div> */}

                <div className="lg:w-1/2 w-full flex flex-row justify-start items-start">
                  <div className="lg:w-1/2 whitespace-nowrap w-full">
                    <PrimaryButton2 handle={() => setEdit(!edit)}>
                      <span className="text-white text-center">
                        Edit Profile
                      </span>
                    </PrimaryButton2>
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start justify-start items-start lg:text-center text-left text-lg w-full">
                <div className="lg:w-1/3 w-full lg:text-left">
                  <p className="font-semibold">First Name</p>
                  <p>{user.first_name}</p>
                </div>
                <div className="lg:w-1/3 w-full lg:text-left">
                  <p className="font-semibold">Last Name</p>
                  <p>{user.last_name}</p>
                </div>
                <div className="lg:w-1/3 w-full lg:text-left">
                  <p className="font-semibold">Gender</p>
                  <p>
                    {user.extended_details &&
                      user.extended_details.personal_information.gender}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full">
                <div className="lg:mr-10 lg:w-1/2 w-full">
                  <span>FirstName</span>
                  <TextField
                    changeText={(e) => setFirstName(e.target.value)}
                    value={user.first_name}
                    type="text"
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <span>LastName</span>
                  <TextField
                    changeText={(e) => setLastName(e.target.value)}
                    value={user.last_name}
                    type="text"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {edit && (
          <div>
            <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full">
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>Date of Birth</span>
                <TextField
                  changeText={(e) => setDob(e.target.value)}
                  value={
                    user.extended_details &&
                    user.extended_details.personal_information.date_of_birth
                  }
                  type="date"
                />
              </div>
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>Gender</span>
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
              <div className="lg:w-1/3 w-full">
                <span>Address Line 1</span>
                <TextField
                  changeText={(e) => setStreet(e.target.value)}
                  value={
                    user.extended_details &&
                    user.extended_details.address_information.street
                  }
                  type="text"
                />
              </div>
            </div>
            <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full my-10">
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>Address Line 2</span>
                <TextField
                  changeText={(e) => setStreet(e.target.value)}
                  value={
                    user.extended_details &&
                    user.extended_details.address_information.street
                  }
                  type="text"
                />
              </div>
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>City</span>
                <TextField
                  changeText={(e) => setCity(e.target.value)}
                  value={
                    user.extended_details &&
                    user.extended_details.address_information.city_name
                  }
                  type="text"
                />
              </div>
              <div className="lg:w-1/3 w-full">
                <span>State</span>
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
              <div className="lg:w-40 w-full">
                <PrimaryButton2 handle={updateProfile}>
                  <span className="text-white text-center">Save Changes</span>
                </PrimaryButton2>
              </div>
            </div>
          </div>
        )}
        {!edit ? (
          <div>
            <div className="w-full flex flex-col justify-start items-start my-10">
              <div className="my-5">
                <p className="font-bold">Personal Details</p>
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between items-start">
                <div className="text-left lg:w-1/3 w-full">
                  <p>Account Type</p>
                  <p className="font-semibold mb-5">{user.account_type}</p>
                  <p>Date of Birth</p>
                  <p className="font-semibold">
                    {user.extended_details &&
                      user.extended_details.personal_information.date_of_birth}
                  </p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Email Address</p>
                  <p className="font-semibold mb-5">{user.email}</p>
                  <p>State</p>
                  <p className="font-semibold">
                    {user.extended_details &&
                      user.extended_details.address_information.province_name}
                  </p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Phone Number</p>
                  <p className="font-semibold mb-5">{user.phone}</p>
                  <p>City</p>
                  <p className="font-semibold">
                    {user.extended_details &&
                      user.extended_details.address_information.city_name}
                  </p>
                </div>
              </div>
            </div>

            {/*   <div className="w-full flex flex-col justify-start items-start my-10">
              <div className="my-5">
                <p className="font-bold">Employment and Bank Details</p>
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between items-start">
                <div className="text-left lg:w-1/3 w-full">
                  <p>Employer or Business Name</p>
                  <p className="font-semibold mb-5">Consumer</p>
                  <p>Business Registration Number</p>
                  <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Valid Government Issued ID</p>
                  <p className="font-semibold mb-5">samo@gmail.com</p>
                  <p>Type of Employment</p>
                  <p className="font-semibold">Lagos</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Employment Confirmation Letter</p>
                  <p className="font-semibold mb-5">07037127360</p>
                  <p>BVN</p>
                  <p className="font-semibold">Ikeja</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start my-10">
              <div className="my-5">
                <p className="font-bold">Work Details</p>
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between items-start">
                <div className="text-left lg:w-1/3 w-full">
                  <p>Work Industry</p>
                  <p className="font-semibold mb-5">Consumer</p>
                  <p>Work Address</p>
                  <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Position at Work</p>
                  <p className="font-semibold mb-5">Manager</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Employment Length</p>
                  <p className="font-semibold mb-5">20</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start my-10">
              <div className="my-5">
                <p className="font-bold">Next of Kin</p>
              </div>
              <div className="w-full flex lg:flex-row flex-col justify-between items-start">
                <div className="text-left lg:w-1/3 w-full">
                  <p>Next of Kin Name</p>
                  <p className="font-semibold mb-5">Jaye Ejire</p>
                  <p>Next of Kin Email</p>
                  <p className="font-semibold">ejireto@gmail.com</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Next of Kin Phone Number</p>
                  <p className="font-semibold mb-5">07037127360</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Relationship</p>
                  <p className="font-semibold">Spouse</p>
                </div>
              </div>
            </div> */}
          </div>
        ) : null}
      </div>}
    </>
  );
};

export default Profile;
