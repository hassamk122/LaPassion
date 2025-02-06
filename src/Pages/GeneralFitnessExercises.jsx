import React from 'react'

import { Link } from 'react-router-dom'
import DayComponent from '../Components/DayComponent'
import { ChevronUp } from 'lucide-react'
function GeneralFitnessExercises() {
  return (
    <div>
      <div className="min-h-screen w-full sm:w-250 bg-dark-purple dark:bg-white">
        <div className="flex items-center justify-center flex-col">
          <div className='flex items-center  text-center justify-center flex-col'>
            <Link to="/WorkoutPlans" className='mt-8 bg-light-purple px-3 rounded-sm hover:translate-y-2 transition-all delay-100 duration-150 ease-in-out' ><ChevronUp /></Link>
            <h1 className='font-Poppins  font-bold drop drop-shadow-[0_20px_45px_rgba(182,235,80,0.65)] dark:drop-shadow-none text-lime-300 text-xl sm:text-3xl mt-8 sm:mt-16 dark:text-lime-500'>Maintenance Plan</h1>
            <p className='font-Poppins text-zinc-300 dark:text-dark-purple text-xs mt-8 font-bold drop-shadow-md drop-shadow-black'>❗ Focus: Balanced Strength & Endurance</p>
          </div>
          <div className='flex items-center text-center justify-center flex-col sm:flex-row flex-wrap'>
            <DayComponent DayNo={1} Exercise1="
            Bench Press – 4×8" Exercise2="Overhead Press – 3×10" Exercise3="Dips – 3×10" Exercise4="Triceps Extensions – 3×12"/>
            <DayComponent DayNo={2} Exercise1="
           30-40 min jogging" Exercise2="Hanging Leg Raises – 3×12" Exercise3="Russian Twists – 3×12" Exercise4="Bicycle Crunches – 3×15"/>
            <DayComponent DayNo={3} Exercise1="
           Deadlifts – 4×6" Exercise2="Pull-ups – 3×8" Exercise3="Lat Pulldown – 3×10" Exercise4="Biceps Curls – 3×12"/>
            <DayComponent DayNo={4} Exercise1="Rest"/>
            <DayComponent DayNo={5} Exercise1="
           Squats – 4×8" Exercise2="Lunges – 3×12" Exercise3="Leg Press – 3×12" Exercise4="Calf Raises – 4×15"/>
            <DayComponent DayNo={6} Exercise1="
          Kettlebell Swings – 3×12" Exercise2="Squats – 20×5" Exercise3="Yoga" />
            <DayComponent DayNo={7} Exercise1="Rest"/>
          </div>
          <p className='font-Poppins text-xs text-zinc-400 dark:text-zinc-700 mb-10 mx-6 text-center'><span className='text-lime-300 dark:text-lime-500'>Diet Tip&nbsp;:</span> Balanced diet with protein, complex carbs, and healthy fats.</p>
        </div>
      </div>
    </div>
  )
}


export default GeneralFitnessExercises