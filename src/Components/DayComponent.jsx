import React from 'react'

function DayComponent(props) {
  return (
    <div>
            <div className='flex items-center justify-center flex-col font-Poppins m-8 border-2 border-zinc-300 dark:border-dark-purple px-4 py-4 rounded-xl hover:bg-medium-purple
      text-zinc-300 dark:text-dark-purple dark:hover:text-white dark:hover:bg-light-purple cursor-pointer  w-56 h-56 sm:w-64 sm:h-64'>
                <div>
                    <h3 className='text-5xl font-black'>Day {props.DayNo}</h3>
                    </div>
                    <div className='mt-6 text-center '>
                    <p className='text-xs sm:text-[14px] leading-5'>{props.Exercise1}</p>
                    <p className='text-xs sm:text-[14px] leading-5'>{props.Exercise2}</p>
                    <p className='text-xs sm:text-[14px] leading-5'>{props.Exercise3}</p>
                    <p className='text-xs sm:text-[14px] leading-5'>{props.Exercise4}</p>
                    <p className='text-xs sm:text-[14px] leading-5'>{props.Exercise5}</p>
                    </div>
                    </div>
        </div>
  )
}
DayComponent.defaultProps ={
    DayNo: 0,
    Exercise1: "",
    Exercise2: "",
    Exercise3: "",
    Exercise4: "",
    Exercise5: "",
}

export default DayComponent