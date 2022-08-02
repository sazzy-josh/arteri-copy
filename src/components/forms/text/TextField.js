import React from 'react'

const TextField = ({type, changeText}) => {
  return (
    <>
        <div className="flex flex-1 flex-row justify-start border rounded-md items-start px-5 py-2 h-14 w-full">
            <input type={type} onChange={changeText} placeholder="" className="custom-file-input focus:outline-none focus:border-0 border-0 h-full w-full" />
        </div>
    </>
  )
}

export default TextField