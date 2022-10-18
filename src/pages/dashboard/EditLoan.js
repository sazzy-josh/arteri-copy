import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

// import styles
// import "../../styles/history.css";
import "../../styles/edit-loan.css";

const HistoryEdit = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    one: "Consumer",
    two: "",
    three: "",
    four: "237*****934",
    five: "Self Employed",
    six: "237*****976",
    seven: "Consumer",
    eight: "Director",
    nine: "3 Years",
    ten: "Lagos",
    eleven: "Muhammed",
    twelve: "237***9677",
    thirteen: "Brother",
    fourteen: "Myaccount@yahoo.com",
  });
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const { name, value } = e.target;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      //   console.log(file);
      //   console.log(fileReader.result);
      setData({ ...data, [name]: fileReader.result });

      // check file size
      // if (file.size > 100000) {
      //   console.log("file size too larger");
      // } else {
      //   console.log("file is good to go");
      // }
    };
  };
  return (
    <ConsumerDashboardWrapper>
      <div className="my-5 px-5">
        <p className="text-2xl font-bold text-left mb-7">Financing History</p>
      </div>
      <section className="p-5">
        <h3 className="text-left text-lg font-bold mb-7">
          Employment and Bank Details
        </h3>
        <div className="mb-10 flex flex-col gap-7  sm:flex-row  flex-wrap sm:gap-x-5 sm:gap-y-7">
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Employer or Business Name</p>
            <input
              type="text"
              name="one"
              className="edit-loan-input "
              value={data.one}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Valid Government issued ID</p>
            <input
              type="file"
              name="two"
              accept="image/*, pdf, doc,docx"
              id=""
              className="hidden"
              onChange={handleFileInputChange}
            />
            <div className="edit-loan-file-input">
              <p className="bg-primary text-white text-xs rounded-sm w-[86px] h-7 leading-7">
                Choose
              </p>
              <p className="text-[#808080] font-medium">No file selected</p>
            </div>
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">
              Employment Confirmation Letter
            </p>
            <input
              type="file"
              name="three"
              accept="image/*, pdf, doc,docx"
              id=""
              className="hidden"
              onChange={handleFileInputChange}
            />
            <div className="edit-loan-file-input ">
              <p className="bg-primary text-white text-xs rounded-sm w-[86px] h-7 leading-7">
                Choose
              </p>
              <p className="text-[#808080] font-medium">No file selected</p>
            </div>
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Business Registration Number</p>
            <input
              type="text"
              name="four"
              className="edit-loan-input "
              value={data.four}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Type of Employment</p>
            <input
              type="text"
              name="five"
              className="edit-loan-input "
              value={data.five}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">BVN</p>
            <input
              type="text"
              name="six"
              className="edit-loan-input "
              value={data.six}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <h3 className="text-left text-lg font-bold mb-7">Work Details</h3>
        <div className="mb-10 flex flex-col gap-7  sm:flex-row  flex-wrap sm:gap-x-5 sm:gap-y-7">
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Work Industry</p>
            <input
              type="text"
              name="seven"
              className="edit-loan-input "
              value={data.seven}
              onChange={handleInputChange}
            />
          </label>

          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Position at Work</p>
            <input
              type="text"
              name="eight"
              className="edit-loan-input "
              value={data.eight}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Employment Length</p>
            <input
              type="text"
              name="nine"
              className="edit-loan-input "
              value={data.nine}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Work Address</p>
            <input
              type="text"
              name="ten"
              className="edit-loan-input "
              value={data.ten}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <h3 className="text-left text-lg font-bold mb-7">Next of Kin</h3>
        <div className="mb-10 flex flex-col gap-7  sm:flex-row  flex-wrap sm:gap-x-5 sm:gap-y-7">
          <label className="edit-loan-label">
            <p className="edit-loan-label-text">Next of kin Name </p>
            <input
              type="text"
              name="eleven"
              className="edit-loan-input "
              value={data.eleven}
              onChange={handleInputChange}
            />
          </label>

          <label className="edit-loan-label">
            <p className="edit-loan-label-text"> Next of kin Phone Number</p>
            <input
              type="text"
              name="twelve"
              className="edit-loan-input "
              value={data.twelve}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text"> Relationship</p>
            <input
              type="text"
              name="thirteen"
              className="edit-loan-input "
              value={data.thirteen}
              onChange={handleInputChange}
            />
          </label>
          <label className="edit-loan-label">
            <p className="edit-loan-label-text"> Relationship</p>
            <input
              type="text"
              name="fourteen"
              className="edit-loan-input "
              value={data.fourteen}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-5 md:w-72 lg:text-center">
          <button className="w-full h-14 rounded-lg border-none outline-none bg-secondary font-medium text-white ">
            {" "}
            Save Changes
          </button>
        </div>
      </section>
    </ConsumerDashboardWrapper>
  );
};

export default HistoryEdit;
