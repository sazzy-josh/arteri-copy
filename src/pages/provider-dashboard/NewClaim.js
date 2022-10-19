import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
// import { useParams } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import TextField from "../../components/inputs/TextField";
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
    console.log("typing");
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
                <section className="p-5 md:w-[700px] lg:w-[900px]">
                  <div className="mb-10 flex flex-col gap-7  sm:flex-row sm:justify-between flex-wrap sm:gap-x-0 sm:gap-y-10">
                    {/* <label className="edit-loan-label">
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
                    </label> */}
                    <div className="w-full md:w-96">
                      <TextField
                        type={"text"}
                        label={"Your Application ID"}
                        name={"one"}
                        value={data.one}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full md:w-96">
                      <TextField
                        type={"text"}
                        label={"Consumer Loan Application ID"}
                        name={"two"}
                        value={data.two}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-10 flex flex-col gap-7  sm:flex-row sm:justify-between flex-wrap sm:gap-x-16 sm:gap-y-10">
                    <div className="w-full md:w-96">
                      <TextField
                        type={"text"}
                        label={"Type of Service"}
                        name={"three"}
                        value={data.three}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full md:w-96">
                      <TextField
                        type={"text"}
                        label={"Cost of Service"}
                        name={"four"}
                        value={data.four}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full h-32 md:w-96 lg:w-full">
                    <label className="text-left mb-3 ">
                      <textarea
                        type="textarea"
                        name="five"
                        className="w-full px-4 py-2 rounded-lg border-2 border-[#808080] outline-none focus:border-primary resize-none "
                        value={data.five}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="my-7 md:flex md:justify-end">
                    <PrimaryButton> Save Changes</PrimaryButton>
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
