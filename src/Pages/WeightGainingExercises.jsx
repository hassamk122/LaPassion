import React from 'react'


import { Link } from 'react-router-dom'
import DayComponent from '../Components/DayComponent'
import { ChevronUp } from 'lucide-react'
function WeightGainingExercises() {
    return (
      <div>
         <div className="min-h-screen w-full sm:w-250 bg-dark-purple dark:bg-white">
                <div className="flex items-center justify-center flex-col">
                  <div className='flex items-center  text-center justify-center flex-col'>
                    <Link to="/WorkoutPlans" className='mt-8 bg-light-purple px-3 rounded-sm hover:translate-y-2 transition-all delay-150 duration-150 ease-in-out' ><ChevronUp /></Link>
                    <h1 className='font-Poppins  font-bold drop drop-shadow-[0_20px_45px_rgba(255,210,47,0.65)] dark:drop-shadow-none text-amber-300 text-xl sm:text-3xl mt-8 sm:mt-16 dark:text-amber-500'>Weight Gaining Plan</h1>
                    <p className='font-Poppins text-zinc-300 dark:text-dark-purple text-xs mt-8 font-bold drop-shadow-md drop-shadow-black'>❗ Focus:Muscle Gain & Strength</p>
                  </div>
                  <div className='flex items-center text-center justify-center flex-col sm:flex-row flex-wrap'>
                    <DayComponent DayNo={1} Exercise1="
                    Bench Press – 4×8" Exercise2="Shoulder Press – 4×8" Exercise3="Dips – 4×10" Exercise4="Lateral Raises – 3×12" Exercise5="Triceps Dips – 3×12"/>
                    <DayComponent DayNo={2} Exercise1="
                   Squats – 4×8" Exercise2="Deadlifts – 4×6" Exercise3="Lunges – 3×12" Exercise4="Leg Press – 3×12" Exercise5="Calf Raises – 4×15"/>
                    <DayComponent DayNo={3} Exercise1="
                  Pull-ups – 4×8" Exercise2="Bent-over Rows – 4×8" Exercise3="Lat Pulldown – 3×10" Exercise4="Barbell Curls – 3×12" Exercise5="Hammer Curls – 3×12"/>
                    <DayComponent DayNo={4} Exercise1="Rest"/>
                    <DayComponent DayNo={5} Exercise1="
                   Deadlifts – 4×6" Exercise2="Weighted Planks – 3×45 sec" Exercise3="Hanging Leg Raises – 3×12" Exercise4="Russian Twists – 3×15"/>
                    <DayComponent DayNo={6} Exercise1="Light jogging, swimming, or stretching" />
                    <DayComponent DayNo={7} Exercise1="Rest"/>
                  </div>
                  <p className='font-Poppins text-xs text-zinc-400 dark:text-zinc-700 mb-10 mx-6 text-center'><span className='text-amber-300 dark:text-amber-500'>Diet Tip&nbsp;:</span> High protein (chicken, fish, eggs, dairy, legumes) + caloric surplus with healthy fats and carbs.</p>
                </div>
              </div>
      </div>
    )
}

export default WeightGainingExercises