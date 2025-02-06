import React from 'react'
import { ArrowRight, Bold } from 'lucide-react'
function OverWeightPlan() {
  return (
   <div className='mt-5  mx-1 sm:w-128 font-Poppins flex text-center flex-col'>
             <div>
             <h3 className='text-left text-[14px] sm:text-[18px] text-white mb-2 dark:text-dark-purple'>
              <strong>➡</strong> Overweight (BMI greater than 25 ) – Weight Loss Diet</h3>
             </div>
             <div className='mx-3 '>
               <p className='text-left text-zinc-400 dark:text-zinc-700  text-xs sm:text-[14px] leading-7'>
                 Goal: Reduce weight by calorie deficit and high protein intake.<br />
                 🔹 Calories: 1,200–1,500 kcal/day<br />
                 🔹 Macronutrient Split: 50% Protein, 30% Fats, 20% Carbs.
               </p>
               <p className='text-left mt-2 text-zinc-400 dark:text-zinc-700 text-xs sm:text-[14px] leading-6 sm:leading-7'>
                 📌 Meal Plan<br />
                 <strong>✅ Breakfast:</strong><br />
                 <div className='mx-4'>
                 - Scrambled eggs + spinach + whole wheat toast<br />
                 - Green tea<br/>
                 </div>
                 <strong>✅ Lunch:</strong><br />
                 <div className='mx-4'>
                 - Grilled salmon or lean chicken + fresh salad with olive oil<br />
                 - Lentil soup with a side of quinoa<br/>
                 </div>
                 <strong>✅ Dinner:</strong><br/>
                 <div className='mx-4'>
                 - Grilled chicken/tofu + roasted vegetables<br/>
                 - Herbal tea<br/>
                 </div>
               </p>
             </div>
           </div>
  )
}

export default OverWeightPlan