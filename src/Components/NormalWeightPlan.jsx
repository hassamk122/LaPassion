import React from 'react'
function NormalWeightPlan() {
  return (
    <div className='mt-5  mx-1 sm:w-128 font-Poppins flex text-center flex-col'>
          <div>
          <h3 className='text-left text-[14px] sm:text-[18px] text-white mb-2 dark:text-dark-purple'>
          <strong>➡</strong> Normal Weight (BMI 18.5 – 24.9) – Maintenance Diet</h3>
          </div>
          <div className='mx-3'>
            <p className=' flex text-left justify-start text-zinc-400 dark:text-zinc-700 text-xs sm:text-[14px] leading-7'>
              Goal: Maintain a healthy weight with balanced macronutrients.<br />
              🔹 Calories: 2,000–2,500 kcal/day <br />
              🔹 Macronutrient Split: 45% Carbs, 30% Protein, 25% Fats
            </p>
            <p className='text-left mt-2 text-zinc-400 dark:text-zinc-700 text-xs sm:text-[14px] leading-6 sm:leading-7'>
              📌 Meal Plan<br />
              <strong>✅ Breakfast:</strong><br />
              <div className='mx-4'>
              - Scrambled eggs + whole wheat toast + avocado<br />
              - Green tea or fresh fruit juice
              </div>
              <strong>✅ Lunch:</strong><br />
              <div className='mx-4'>
              - 1 serving grilled chicken or tofu + brown rice + steamed veggies<br />
              - Fresh salad with olive oil dressing
              </div>
              <strong>✅ Dinner:</strong><br/>
              <div className='mx-4'>
              - Baked fish or paneer + quinoa + roasted vegetables<br/>
              - Herbal tea
              </div>
            </p>
          </div>
        </div>
  )
}

export default NormalWeightPlan