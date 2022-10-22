import React from 'react'

export const QuestionCard = ({question}) => {
  return (
    <div className="p-3 my-6 rounded-md bg-[#F6FAFD] text-primary font-[500] text-left shadow-sm drop-shadow-sm ">
      <p>{question}</p>
    </div>
  )
}
