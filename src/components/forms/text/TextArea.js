import React from 'react'

const TextArea = ({type, changeText, placeholder}) => {
  return (
    <>
        <div className="flex flex-1 flex-row justify-start border rounded-md items-start px-5 py-2 h-40 w-full">
            <textarea type={type} onChange={changeText} placeholder={placeholder} className="custom-file-input focus:outline-none focus:border-0 border-0 h-full w-full" />
        </div>
    </>
  )
}

export default TextArea