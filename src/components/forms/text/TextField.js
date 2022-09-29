import React from 'react'

const TextField = ({type, changeText, value}) => {
  return (
    <>
        <div className="flex flex-1 bg-transparent flex-row justify-start border border-shade rounded-md items-start px-5 py-2 h-14 w-full">
            <input type={type} defaultValue={value} onChange={changeText} autoComplete="off" placeholder="" className={type == "file" ? "custom-file-input focus:outline-none focus:border-0 border-0 h-full w-full bg-transparent" : "focus:outline-none focus:border-0 border-0 h-full w-full bg-transparent"} />
        </div>
    </>
  )
}

export default TextField