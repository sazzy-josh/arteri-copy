import React from 'react'
import PrimaryButton2 from '../forms/buttons/PrimaryButton'
import TextField from '../forms/text/TextField'

const Password = ({ handleAccept}) => {
  return (
    <div className="w-full my-5">
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Old Password</p>
          <TextField type="password" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-5">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">New Password</p>
          <TextField type="password" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-5">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Confirm Password</p>
          <TextField type="password" />
        </div>
      </div>
      
      <div className="w-full flex flex-row justify-between items-center">
        <div></div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/3 w-full">
          <div className="lg:w-1/2 w-full lg:mr-5 md:mr-1">
            
          <div className="w-full">
            <PrimaryButton2 handle={handleAccept}>
              <span>Change Password</span>
            </PrimaryButton2>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Password