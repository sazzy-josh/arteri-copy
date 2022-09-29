import React from "react";

const SelectField = ({ type, changeText, value, data, name, id, optionList }) => {
  return (
    <>
      <div className="flex flex-1 bg-transparent flex-row justify-start border border-shade rounded-md items-start py-2 h-14 w-full">
        <select
          defaultValue={value}
          onChange={changeText}
          className="w-full h-full bg-transparent focus:outline-none focus:border-0 border-0"
          name={name}
          id={id}
        >
          <option>Select option</option>
         {optionList}
        </select>
      </div>
    </>
  );
};

export default SelectField;
