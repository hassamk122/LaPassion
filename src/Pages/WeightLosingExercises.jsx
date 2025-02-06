import React from 'react'

import { Link } from 'react-router-dom'
import DayComponent from '../Components/DayComponent'
import { ChevronUp } from 'lucide-react'
function WeightLosingExercises() {
  return (
    <div>
       <div className="min-h-screen w-full sm:w-250 bg-dark-purple dark:bg-white">
                      <div className="flex items-center justify-center flex-col">
                        <div className='flex items-center  text-center justify-center flex-col'>
                          <Link to="/WorkoutPlans" className='mt-8 bg-light-purple px-3 rounded-sm hover:translate-y-2 transition-all delay-150 duration-150 ease-in-out' ><ChevronUp /></Link>
                          <h1 className='font-Poppins  font-bold drop drop-shadow-[0_20px_45px_rgba(242,43,55,0.55)] dark:drop-shadow-none text-red-500 text-xl sm:text-3xl mt-8 sm:mt-16 dark:text-red-500'>Weight Gaining Plan</h1>
                          <p className='font-Poppins text-zinc-300 dark:text-dark-purple text-xs mt-8 font-bold drop-shadow-md drop-shadow-black'>❗ Focus: Fat Loss & Endurance</p>
                        </div>
                        <div className='flex items-center text-center justify-center flex-col sm:flex-row flex-wrap'>
                          <DayComponent DayNo={1} Exercise1="Jump Rope – 3×1 min" Exercise2="Burpees – 3×10" Exercise3="Sprints – 4×30 sec" Exercise4="Rowing Machine – 10 min"/>
                          <DayComponent DayNo={2} Exercise1="Dumbbell Shoulder Press – 3×10" Exercise2="Push-ups – 3×12
" Exercise3="Bent-over Rows – 3×10" Exercise4="Plank Hold – 3×45 sec"/>
                          <DayComponent DayNo={3} Exercise1="Jogging – 30 min" Exercise2="Hanging Leg Raises – 3×12" Exercise3="Side Planks – 3×30 sec each side"/>
                          <DayComponent DayNo={4} Exercise1="Squats – 3×10" Exercise2="Romanian Deadlifts – 3×10" Exercise3="Leg Press – 3×12" Exercise4="Calf Raises – 3×15
"/>
                          <DayComponent DayNo={5} Exercise1="Rest"/>
                          <DayComponent DayNo={6} Exercise1="Kettlebell Swings – 3×12" Exercise2="Burpees – 3×10" Exercise3="Jump Squats – 3×12" Exercise4="Russian Twists – 3×15" />
                          <DayComponent DayNo={7} Exercise1="Rest"/>
                        </div>
                        <p className='font-Poppins text-xs text-zinc-400 dark:text-zinc-700 mb-10 mx-6 text-center'><span className='text-red-500 dark:text-red-700'>Diet Tip&nbsp;:</span> Caloric deficit with high-protein, low-carb meals & fiber-rich foods.</p>
                      </div>
                    </div>
    </div>
  )
}

export default WeightLosingExercises