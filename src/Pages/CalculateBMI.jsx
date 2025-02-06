import React from 'react'
import BmiCalculator from "../Components/BmiCalculator"
import { Dot } from 'lucide-react'
function CalculateBMI() {
  return (
    <div className="min-h-screen w-full bg-dark-purple dark:bg-white">
      <div className="flex items-center justify-center flex-col">
        <BmiCalculator />
        <div className='text-justify  mx-8 mt-2 sm:mt-8 text-[12px] sm:w-156 sm:text-[16px] font-Poppins text-zinc-400 dark:text-zinc-600'>
          <p> A Body Mass Index (BMI) Calculator is a tool used to estimate a person's body fat based on their weight and height.
            It provides a numerical value that helps categorize an individual into different weight status groups such as underweight,
            normal weight, overweight, or obese.</p>
        </div>
        <div className='text-justify  mx-8 mt-6 sm:mt-8 text-[12px] sm:w-156 sm:text-[14px] font-Poppins text-zinc-400 dark:text-zinc-600'>
          <h3 className='font-Poppins text-xs sm:text-xl text-white dark:text-dark-purple'><strong>How BMI is Calculated?</strong></h3>
          <p className='mt-2'>
            The BMI formula is:<br/>
         <span className='font-black'>BMI = weight (kg) / (height (m) × height (m))</span> <br/>
        - Weight is measured in kilograms (kg).<br/>
         - Height is converted from feet and inches to meters (m).<br/>
         - The BMI result is obtained by dividing weight by the square of height in meters.
          </p>
        </div>
        <div className='m-8'>
          <table className="w-72 mx-4 sm:w-128 border-2 border-zinc-300 dark:border-dark-purple text-white text-center rounded-2xl font-Poppins text-xs sm:text-[14px]">
            <thead>
              <tr className="bg-dark-purple dark:bg-white">
                <th className="border border-zinc-300  text-white dark:text-dark-purple dark:border-dark-purple p-2 font-semibold">BMI Range</th>
                <th className="border border-zinc-300  text-white dark:text-dark-purple dark:border-dark-purple p-2 font-semibold">Category</th>
                <th className="border border-zinc-300  text-white dark:text-dark-purple dark:border-dark-purple p-2 font-semibold">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300  dark:border-dark-purple  text-zinc-400 dark:text-zinc-600 p-2">Below 18.5</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">Underweight</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">May indicate malnutrition or underlying health issues.</td>
              </tr>
              <tr>
                <td className="border border-zinc-300  dark:border-dark-purple  text-zinc-400 dark:text-zinc-600 p-2">18.5 – 24.9</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">Normal Weight</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">Considered a healthy weight range.</td>
              </tr>
              <tr>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">25 – 29.9</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">Overweight</td>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600 p-2">Higher weight than recommended; may pose health risks.</td>
              </tr>
              <tr>
                <td className="border border-zinc-300  dark:border-dark-purple text-zinc-400 dark:text-zinc-600  p-2">30 and above</td>
                <td className="border border-zinc-300  dark:border-dark-purple  text-zinc-400 dark:text-zinc-600 p-2">Obese</td>
                <td className="border border-zinc-300  dark:border-dark-purple  text-zinc-400 dark:text-zinc-600 p-2">Increased risk of health complications such as diabetes, heart disease, and hypertension.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CalculateBMI