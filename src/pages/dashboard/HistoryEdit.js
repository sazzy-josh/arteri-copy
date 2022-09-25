import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";

// import styles
// import "../../styles/history.css";
import "../../styles/edit-loan.css";

const HistoryEdit = () => {
  const { id } = useParams();
  const [test, setTest] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
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
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex">
          <SideMenu selectHistory={true} />
        </div>
        <div className="lg:w-4/5 w-full">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectHistory={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <>
                <div className="my-5 px-5">
                  <p className="text-2xl font-bold text-left mb-7">
                    Financing History
                  </p>
                </div>
                <section className="p-5">
                  <h3 className="text-left font-bold mb-7">
                    Employment and Bank Details
                  </h3>
                  <div className="flex flex-col gap-x-7 gap-y-8 sm:flex-row sm:gap-5 flex-wrap ">
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">
                        Employer or Business Name
                      </p>
                      <input
                        type="text"
                        name="one"
                        className="edit-loan-input "
                        value={data.one}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">
                        Valid Government issued ID
                      </p>
                      <input
                        type="file"
                        name="two"
                        accept="image/*, pdf, doc,docx"
                        id=""
                        className="hidden"
                        onChange={handleFileInputChange}
                      />
                      <div className="edit-loan-file-input">
                        <button className="bg-primary text-white text-xs rounded-sm w-[86px] h-7">
                          Choose
                        </button>
                        <p className="text-[#808080] font-medium">
                          No file selected
                        </p>
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
                      <div className="edit-loan-file-input">
                        <button className="bg-primary text-white text-xs rounded-sm w-[86px] h-7">
                          Choose
                        </button>
                        <p className="text-[#808080] font-medium">
                          No file selected
                        </p>
                      </div>
                    </label>
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">
                        Business Registration Number
                      </p>
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
                </section>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HistoryEdit;
