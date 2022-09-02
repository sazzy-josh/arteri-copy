import React, { useState } from "react";
import CamIcon from "../../assets/icons/camera.svg";
import ProfilePic from "../../assets/images/profile.png";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextField from "../forms/text/TextField";

const Profile = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="w-full my-5">
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
                <div className="lg:w-1/3 w-full">
                <div className="text-left flex flex-row justify-start items-center lg:my-0 my-5">
                  <p className="font-semibold mr-2">Verification Status:</p>
                  <div className="rounded-xl border bg-red-100 text-red-500 px-2 py-1 text-center">
                    <span>Not Verified</span>
                  </div>
                </div>
                </div>
                <div className="lg:w-1/3 w-full">
                <div
                  onClick={() => navigate("/account/verification")}
                  className="rounded-xl border border-green-500 bg-green-50 hover:bg-green-100 text-green-500 px-2 cursor-pointer py-1 text-center"
                >
                  <span>Verify account</span>
                </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-row justify-start items-start">
                  <div className="lg:w-1/3 w-full">
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
                  <p>Michael</p>
                </div>
                <div className="lg:w-1/3 w-full lg:text-left">
                  <p className="font-semibold">Last Name</p>
                  <p>Jackson</p>
                </div>
                <div className="lg:w-1/3 w-full lg:text-left">
                  <p className="font-semibold">Gender</p>
                  <p>Male</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full">
                <div className="lg:mr-10 lg:w-1/2 w-full">
                  <span>FirstName</span>
                  <TextField type="text" />
                </div>
                <div className="lg:w-1/2 w-full">
                  <span>LastName</span>
                  <TextField type="text" />
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
                <TextField type="date" />
              </div>
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>Gender</span>
                <TextField type="text" />
              </div>
              <div className="lg:w-1/3 w-full">
                <span>Address Line 1</span>
                <TextField type="text" />
              </div>
            </div>
            <div className="text-left flex lg:flex-row flex-col justify-start items-center w-full my-10">
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>Address Line 2</span>
                <TextField type="text" />
              </div>
              <div className="lg:mr-5 lg:w-1/3 w-full">
                <span>City</span>
                <TextField type="text" />
              </div>
              <div className="lg:w-1/3 w-full">
                <span>State</span>
                <TextField type="text" />
              </div>
            </div>
            <div className="flex flex-row lg:justify-end lg:items-end justify-center items-center">
              <div className="lg:w-40 w-full">
                <PrimaryButton2 handle={() => setEdit(!edit)}>
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
                  <p className="font-semibold mb-5">Consumer</p>
                  <p>Date of Birth</p>
                  <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Email Address</p>
                  <p className="font-semibold mb-5">samo@gmail.com</p>
                  <p>State</p>
                  <p className="font-semibold">Lagos</p>
                </div>
                <div className="text-left lg:w-1/3 w-full">
                  <p>Phone Number</p>
                  <p className="font-semibold mb-5">07037127360</p>
                  <p>City</p>
                  <p className="font-semibold">Ikeja</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start my-10">
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
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
