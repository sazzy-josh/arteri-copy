import React from "react";

const TextField = ({ type, label, name, value, onChange }) => {
  return (
    <>
      <label className="text-left mb-3 ">
        {label && (
          <p className="text-left mb-3 font-medium">{label || "label"}</p>
        )}
        <input
          type={type}
          name={name || "one"}
          className={`w-full px-4 rounded-lg border-2 border-[#808080] outline-none focus:border-primary ${
            type === "textarea" ? "h-full" : "h-14"
          }`}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default TextField;
