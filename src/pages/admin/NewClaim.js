import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";

const NewClaim = () => {
  //   const { id } = useParams();
  //   const [test, setTest] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    one: "AD43780932",
    two: "",
    three: "Healthcare service",
    four: "",
    five: "",
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
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <ProviderSideMenu selectClaim={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <ProviderMobileHeader
                selectClaim={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <>
                <div className="my-5 px-5">
                  <p className="text-2xl font-bold text-left mb-7">New Claim</p>
                </div>
                <section className="p-5  md:w-4/6">
                  <div className="mb-10 flex flex-col gap-7  sm:flex-row sm:justify-between flex-wrap sm:gap-x-16 sm:gap-y-10">
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text ">
                        Your Application ID
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
                        Consumer Loan Application ID
                      </p>
                      <input
                        type="text"
                        name="two"
                        className="edit-loan-input "
                        value={data.two}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="mb-10 flex flex-col gap-7  sm:flex-row sm:justify-between flex-wrap sm:gap-x-16 sm:gap-y-10">
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">Type of Service</p>
                      <input
                        type="text"
                        name="three"
                        className="edit-loan-input "
                        value={data.three}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">Cost of Service</p>
                      <input
                        type="text"
                        name="four"
                        className="edit-loan-input "
                        value={data.four}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="mb-10 w-full">
                    {" "}
                    <label className="edit-loan-label">
                      <p className="edit-loan-label-text">
                        Additional Comment{" "}
                      </p>
                      <input
                        type="text"
                        name="five"
                        className="edit-loan-input "
                        value={data.five}
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
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NewClaim;
