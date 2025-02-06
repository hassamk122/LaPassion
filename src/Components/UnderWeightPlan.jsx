import React from 'react'
function UnderWeightPlan() {
  return (
    <div className='mt-5  mx-1 sm:w-128 font-Poppins flex text-center flex-col'>
      <div>
        <h3 className='text-left text-[14px] sm:text-[18px] text-white mb-2 dark:text-medium-purple'>
          <strong>➡</strong> Underweight (BMI less than 18.5) – Weight Gain Diet</h3>
      </div>
      <div className='mx-3'>
        <p className='text-left text-zinc-400 dark:text-zinc-700  text-xs sm:text-[14px] leading-7'>
          Goal : Increase calorie intake with nutrient-dense foods.<br />
          🔹 Calories: 2,500–3,000 kcal/day <br />
          🔹 Macronutrient Split: 50% Carbs, 25% Protein, 25% Fats.
        </p>
        <p className='text-left mt-2 text-zinc-400 dark:text-zinc-700  text-xs sm:text-[14px] leading-6 sm:leading-7'>
          📌 Meal Plan<br />
          <strong>✅ Breakfast:</strong><br />
          <div className='mx-4'>
            - 2 boiled eggs + whole wheat toast with peanut butter<br />
            - 1 glass of full-fat milk or smoothie (banana, oats, almonds, honey)<br /></div>
          <strong> ✅ Lunch:</strong><br />
          <div className='mx-4'>
            - 1 cup brown rice + grilled chicken/fish + sautéed vegetables<br />
            - 1 bowl lentil soup + chapati<br />
            - Fresh fruit juice<br /></div>
          <strong>✅ Dinner:</strong><br />
          <div className='mx-4'>
            - Grilled salmon/chicken + quinoa + steamed broccoli<br />
            - Full-fat Greek yogurt with honey</div>
        </p>
      </div>
    </div>
  )
}

export default UnderWeightPlan