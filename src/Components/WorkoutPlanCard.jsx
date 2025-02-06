import React from 'react'
function WorkoutPlanCard(props) {
  return (
    <div className={`flex items-center justify-center flex-col m-8 border-[1px]  border-zinc-300 px-4 py-4 rounded-xl hover:bg-medium-purple
      text-zinc-300 dark:text-dark-purple dark:hover:text-white dark:hover:bg-light-purple cursor-pointer  w-56 h-56 sm:w-64 sm:h-64`}>
        <div>
        <img src={props.image} alt='home workout' className=' w-30 h-30 sm:w-40 sm:h-40' ></img>
        </div>
        <div className='mt-4'>
       <h2 className='font-Poppins text-xl  leading-6'>{props.heading}</h2>
       </div>
    </div>
  )
}

export default WorkoutPlanCard