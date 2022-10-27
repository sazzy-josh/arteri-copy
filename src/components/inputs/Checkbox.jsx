import React from "react";

const CheckboxField = ({ on, off }) => {
  return (
    // <label htmlFor="checkBox" className="w-9 h-5 relative rounded-full bg-shade ">
    //    <input type="checkbox"  id="checkBox" className='hidden peer' onChange={(e) => e.target.checked  ? on() : off()} />
    //    <span className='h-4/5 w-2/5 bg-white absolute left-1 top-0.5 rounded-full peer-checked:translate-x-full transition ease-in-out'></span>
    // </label>

    // <label className='transition-all' >
    //     <input type="checkbox" id="checkBox" className='hidden peer' onChange={(e) => e.target.checked  ? on() : off()} />
    //     <div className='relative w-8 h-[18px] rounded-full bg-shade before:absolute before:w-2/5 before:left-1 before:bottom-0.5 before:h-4/5 before:bg-white before:rounded-full peer-checked:bg-[#8BC34A] peer-checked:before:translate-x-full peer-checked:before:transition peer-checked:duration-300  transition-all duration-300'>
    //     </div>
    // </label>

    <label className="transition-all cursor-pointer">
      <input
        type="checkbox"
        id="checkBox"
        className="hidden peer"
        onChange={(e) => (e.target.checked ? on() : off())}
      />
      <div className="relative w-[34px] h-[19px] rounded-[40px] bg-shade before:absolute before:w-2/5 before:left-1 before:bottom-0.5 before:h-4/5 before:bg-white before:rounded-full peer-checked:bg-[#8BC34A] peer-checked:before:translate-x-full peer-checked:before:transition peer-checked:duration-300  transition-all duration-300"></div>
    </label>
  );
};

export default CheckboxField;
