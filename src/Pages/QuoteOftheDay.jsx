import React from 'react'
import QuoteApi from '../Components/QuoteApi'
function QuoteOftheDay() {
  return (
    <div className="h-100 w-full bg-dark-purple dark:bg-white">
    <div className="flex items-center justify-center flex-col">
       <QuoteApi/>
    </div>
  </div>
  )
}

export default QuoteOftheDay