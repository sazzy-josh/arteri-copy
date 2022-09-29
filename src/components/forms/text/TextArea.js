import React from 'react'

const TextArea = ({type, changeText, placeholder, value}) => {
  return (
    <>
        <div className="flex flex-1 bg-transparent flex-row justify-start border border-shade rounded-md items-start px-5 py-2 h-40 w-full">
            <textarea type={type} defaultValue={value}onChange={changeText} placeholder={placeholder} className="custom-file-input focus:outline-none focus:border-0 border-0 h-full w-full bg-transparent" />
        </div>
    </>
  )
}

export default TextArea