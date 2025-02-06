import React from 'react'
import { Calculator } from 'lucide-react'
import { CandyOff } from 'lucide-react'
import { Dumbbell } from 'lucide-react'
import { BookOpenText } from 'lucide-react'
import { BookType } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='flex items-center justify-center flex-wrap p-2 mx-6 sm:mx-0 border-gray-700 dark:border-gray-200 flex-col sm:flex-row mt-4  sm:w-240 sm:h-12 border-b-[1px]'>
        <ul className='flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-x-5'>
            <li><Link to="/BmiCalculator"  className='nav-li'><Calculator  size={15}/>BMI Calcutor</Link></li>
            <li><Link to="/DietPlans" className='nav-li'><CandyOff  size={15}/>Diet Plans</Link></li>
            <li><Link to="/WorkoutPlans" className='nav-li'><Dumbbell size={15}/>Workout Plans</Link></li>
            <li><Link to="/UsefulResources" className='nav-li'><BookOpenText size={15}/>Useful Resources</Link></li>
            <li><Link to="/QuoteOftheDay" className='nav-li'><BookType  size={15}/>Random Motivational Quote</Link></li>
        </ul>
    </div>
  )
}
