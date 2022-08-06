import React from "react";
import CamIcon from "../../assets/icons/camera.svg";
import ProfilePic from "../../assets/images/profile.png";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";

const Profile = () => {
  return (
    <>
      <div className="w-full my-5">
        <div className="w-full flex flex-row justify-start items-center">
          <div className="w-1/4">
            <img
              className="aboslute rounded-full"
              src={ProfilePic}
              width="171px"
              height="171px"
              alt="Profile Pics"
            />
            <img
              className="relative z-10 bottom-16 left-24 cursor-pointer"
              src={CamIcon}
              width="46px"
              height="46px"
              alt="Camera icon"
            />
          </div>
          <div className="flex flex-row justify-start items-start text-lg w-2/4">
            <div className="mr-10">
              <p className="font-semibold">First Name</p>
              <p>Michael</p>
            </div>
            <div>
              <p className="font-semibold">Last Name</p>
              <p>Jackson</p>
            </div>
          </div>
          <div className="w-1/4 flex flex-row justify-start items-start">
            <div className="w-1/2">
            <PrimaryButton2>
              <span className="text-white text-center">Edit Profile</span>
            </PrimaryButton2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start my-10">
            <div className="my-5"><p className="font-bold">Personal Details</p></div>
            <div className="w-full flex justify-between items-start">
                <div className="text-left w-1/3">
                    <p>Account Type</p>
                    <p className="font-semibold mb-5">Consumer</p>
                    <p>Date of Birth</p>
                    <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Email Address</p>
                    <p className="font-semibold mb-5">samo@gmail.com</p>
                    <p>State</p>
                    <p className="font-semibold">Lagos</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Phone Number</p>
                    <p className="font-semibold mb-5">07037127360</p>
                    <p>City</p>
                    <p className="font-semibold">Ikeja</p>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start my-10">
            <div className="my-5"><p className="font-bold">Employment and Bank Details</p></div>
            <div className="w-full flex justify-between items-start">
                <div className="text-left w-1/3">
                    <p>Employer or Business Name</p>
                    <p className="font-semibold mb-5">Consumer</p>
                    <p>Business Registration Number</p>
                    <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Valid Government Issued ID</p>
                    <p className="font-semibold mb-5">samo@gmail.com</p>
                    <p>Type of Employment</p>
                    <p className="font-semibold">Lagos</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Employment Confirmation Letter</p>
                    <p className="font-semibold mb-5">07037127360</p>
                    <p>BVN</p>
                    <p className="font-semibold">Ikeja</p>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start my-10">
            <div className="my-5"><p className="font-bold">Work Details</p></div>
            <div className="w-full flex justify-between items-start">
                <div className="text-left w-1/3">
                    <p>Work Industry</p>
                    <p className="font-semibold mb-5">Consumer</p>
                    <p>Work Address</p>
                    <p className="font-semibold">12/12/1987</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Position at Work</p>
                    <p className="font-semibold mb-5">Manager</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Employment Length</p>
                    <p className="font-semibold mb-5">20</p>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start my-10">
            <div className="my-5"><p className="font-bold">Next of Kin</p></div>
            <div className="w-full flex justify-between items-start">
                <div className="text-left w-1/3">
                    <p>Next of Kin Name</p>
                    <p className="font-semibold mb-5">Jaye Ejire</p>
                    <p>Next of Kin Email</p>
                    <p className="font-semibold">ejireto@gmail.com</p>
                </div>
                <div className="text-left w-1/3">
                    <p>Next of Kin Phone Number</p>
                    <p className="font-semibold mb-5">07037127360</p>
                    
                </div>
                <div className="text-left w-1/3">
                    <p>Relationship</p>
                    <p className="font-semibold">Spouse</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
