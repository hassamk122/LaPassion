import React, { useState } from 'react'
import WorkoutPlanCard from '../Components/WorkoutPlanCard'
import ObesePerson from '../assets/Obese.png'
import NormalPerson from '../assets/Normal Person.png'
import WeakPerson from '../assets/weak person.png'
import { Link } from 'react-router-dom'
function WorkoutPlans() {


  return (
    <div className="min-h-screen w-full bg-dark-purple dark:bg-white">
      <div className="flex items-center justify-center flex-col">
      <h2 className='text-white font-Poppins mt-7 text-2xl drop-shadow-[0px_10px_40px_rgba(255,255,255,0.6)] dark:text-dark-purple'>Workout Plans</h2>
        <h1 className='font-Poppins text-2xl sm:text-4xl mt-8 sm:mt-24 text-white dark:text-dark-purple'> Choose Category</h1>
        <div className='flex items-center justify-center flex-row flex-wrap'>
        <Link to="/WorkoutPlans/WeightGainingExercise"> <WorkoutPlanCard image={WeakPerson} heading="BMI < 18" /></Link>
        <Link to="/WorkoutPlans/FitnessExercise">    <WorkoutPlanCard image={NormalPerson} heading="BMI > 18 && < 25"/></Link>
        <Link to="/WorkoutPlans/WeightLosingExercise"> <WorkoutPlanCard image={ObesePerson} heading="BMI > 25"/></Link> 
        </div>
        <p className='text-center text-[10px] sm:text-xs mx-6 text-zinc-500'>* If you do not know your BMI (Body Mass Index), Use bmi calculator to find it. </p>
      </div>
    </div>
  )
}

export default WorkoutPlans