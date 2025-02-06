import React from 'react'
import UnderWeightPlan from '../Components/UnderWeightPlan'
import { useState } from 'react'
import NormalWeightPlan from '../Components/NormalWeightPlan';
import OverWeightPlan from '../Components/OverWeightPlan';
function DietPlans() {
  const [selectedOption, setSelectedOption] = useState("1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const renderComponent = () => {
    switch (selectedOption) {
      case "1":
        return ;
      case "under":
        return <UnderWeightPlan />;
      case "normal":
        return <NormalWeightPlan />;
      case "over":
        return <OverWeightPlan />;
    }
  };
  return (
    <div className="min-h-100 w-full bg-dark-purple dark:bg-white">
      <div className="flex items-center justify-center flex-col  mx-6">
      <h2 className='text-white font-Poppins mt-7 text-2xl drop-shadow-[0px_10px_40px_rgba(255,255,255,0.6)]  dark:text-dark-purple'>Diet Plans</h2>
      <p className='sm:w-128 font-Poppins text-justify text-xs sm:text-[14px] text-zinc-400 dark:text-zinc-700 mt-5'>Here are diet plans categorized by weight groups, considering general health principles and balanced nutrition.
          These plans focus on maintaining, gaining, or losing weight as needed.</p> 
        <label className='font-Poppins text-white dark:text-medium-purple mt-5 text-xs sm:text-[18px] mb-3' for="cars">Select your BMI to get Diet Plan :</label>
        <select className='font-Poppins text-xs sm:text-[16px] border-2 border-white px-2 py-0.5 bg-white rounded-sm dark:bg-light-purple dark:border-dark-purple mt-2 text-black dark:text-white' name="cars" id="cars" onChange={handleChange} value={selectedOption}>
        <option   className='px-2 text-xs sm:text-[16px]' value="1" disabled hidden>Select an Option</option>
          <option className='px-2 text-xs sm:text-[16px]' value="under">Below 18.5 BMI</option>
          <option className='px-2 text-xs sm:text-[16px]' value="normal">18.5 – 24.9 BMI </option>
          <option className='px-2 text-xs sm:text-[16px]' value="over">Over 25 BMI</option>
        </select>
        <div className="mt-4">{renderComponent()}</div>
        <p className='mt-8 mb-6 border-[1px] rounded-xl border-white dark:border-medium-purple px-4 py-2 sm:px-8 sm:py-4 text-xs'><span className='font-Poppins text-white dark:text-dark-purple text-xs sm:text-xl' >Key Note for All Categories:</span><br /><br/>
          ✔ <span className='font-Poppins text-zinc-400 dark:text-zinc-800 text-xs sm:text-[15px]' >Stay hydrated: 8–10 glasses of water daily</span><br />
          ✔ <span className='font-Poppins text-zinc-400 dark:text-zinc-800 text-xs sm:text-[15px] ' >Avoid processed sugar, sodas, and junk food</span><br />
          ✔ <span className='font-Poppins text-zinc-400 dark:text-zinc-800 text-xs sm:text-[15px]' >Ensure fiber intake for digestion</span><br />
          ✔<span className='font-Poppins text-zinc-400 dark:text-zinc-800  text-xs sm:text-[15px] ' > Maintain a regular meal schedule</span></p>
          
      </div>

    </div>
  )
}

export default DietPlans