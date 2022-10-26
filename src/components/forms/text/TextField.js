import React from "react";

const TextField = ({ type, changeText, value, name }) => {
  return (
    <>
      <div className="flex flex-1 bg-transparent flex-row justify-start border-2 border-[#808080] rounded-lg items-start px-4 py-2 h-14 w-full">
        <input
          name={name}
          type={type}
          defaultValue={value}
          onChange={changeText}
          autoComplete="off"
          placeholder=""
          className={
            type === "file"
              ? "custom-file-input outline-none focus:border-0 border-2 h-full w-full bg-transparent"
              : "outline-none focus:border-0 border-0 h-full w-full bg-transparent"
          }
        />
      </div>
    </>
  );
};

export default TextField;
