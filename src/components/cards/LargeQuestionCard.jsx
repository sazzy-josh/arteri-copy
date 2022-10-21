import React from 'react'

export const QuestionCard = ({question}) => {
  return (
    <div className="p-3 my-3 rounded-md bg-[#F6FAFD] text-primary font-[500] text-left ">
      <p>{question}</p>
    </div>
  )
}
