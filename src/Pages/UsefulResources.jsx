import React from 'react'
import JeffNippard from "../assets/jeffNippard.jpg"
import YtBox from '../Components/YtBox'
import { Youtube } from 'lucide-react'
import { Newspaper } from 'lucide-react'
import Rp from '../assets/RP.jpg'
import Umarsluf from '../assets/Omarsluf.jpg'
import jake from "../assets/jack piggot.jpg"
function UsefulResources() {
    return (
        <div className="min-h-screen w-full bg-dark-purple dark:bg-white mb-5">
            <div className="flex items-center justify-center flex-col font-Poppins">
                <h2 className='text-white font-Poppins mt-7 text-2xl drop-shadow-[0px_10px_40px_rgba(255,255,255,0.65)]  dark:text-dark-purple'>Useful Resources</h2>
                <h3 className='text-white mt-8 flex items-center justify-center gap-2 dark:text-dark-purple'><Youtube size={20} />Channels</h3>
                <div className='flex flex-row justify-center items-center'>
                    <YtBox image={JeffNippard} name="Jeff Nippard"
                        link="https://www.youtube.com/@JeffNippard/videos" />
                    <YtBox image={Rp} name="Renaissance Periodization"
                        link="https://www.youtube.com/@RenaissancePeriodization/videos" />
                    <YtBox image={Umarsluf} name="OmarIsuf"
                        link="https://www.youtube.com/@OmarIsuf" />
                        <YtBox image={jake} name="Jak Piggott"
                         link="https://www.youtube.com/@JakPiggott"/>
                </div>
                <h3 className='text-white mt-16 flex items-center justify-center gap-2 dark:text-dark-purple'><Newspaper size={20} />Articles</h3>
                <p className='sm:w-128 text-justify text-xs mx-6 mt-4 text-zinc-400  dark:text-zinc-500'>
                    <h3 className='text-zinc-200 dark:text-zinc-700 underline'> <a href='https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/healthy-ways-to-gain-weight/' target='_blank'>1. Healthy Ways to Gain Weight</a></h3>
                    The NHS provides guidance on gaining weight safely,
                    emphasizing gradual increases in calorie intake through healthy foods,
                    incorporating snacks, and engaging in strength training to build muscle mass.<br />
                    <a href='https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/healthy-ways-to-gain-weight/' target='_blank' className='underline'>Read More..</a>
                </p>
                <p className='sm:w-128 text-justify text-xs mx-6 mt-4 text-zinc-400  dark:text-zinc-500'>
                    <h3 className='text-zinc-200  dark:text-zinc-700 underline'> <a href='https://www.forbes.com/health/nutrition/how-to-gain-weight/' target='_blank'>2. How to Gain Weight Safely</a></h3>
                    Forbes discusses strategies for healthy weight gain, highlighting the importance of a caloric surplus, adequate protein intake, and strength training to ensure gains are in lean body mass rather than fat.<br />
                    <a href='https://www.forbes.com/health/nutrition/how-to-gain-weight/' target='_blank' className='underline'>Read More..</a>
                </p>
                <p className='sm:w-128 text-justify text-xs mx-6 mt-4 text-zinc-400  dark:text-zinc-500'>
                    <h3 className='text-zinc-200  dark:text-zinc-700 underline'> <a href='https://www.healthline.com/nutrition/body-recomposition' target='_blank'>3. Body Recomposition: Lose Fat and Gain Muscle at the Same Time</a></h3>
                    Healthline explores the concept of body recomposition, focusing on techniques to simultaneously lose fat and gain muscle through a combination of resistance training, adequate protein consumption, and managing caloric intake. <br />
                    <a href='https://www.healthline.com/nutrition/body-recomposition' target='_blank' className='underline'>Read More..</a>
                </p>
                <p className='sm:w-128 text-justify text-xs mx-6 mt-4 text-zinc-400 dark:text-zinc-500'>
                    <h3 className='text-zinc-200  dark:text-zinc-700 underline'> <a href='https://www.health.com/how-many-calories-should-i-burn-a-day-8778183' target='_blank'>4. How Many Calories Should You Burn a Day?</a></h3>
                    Health.com discusses the factors influencing daily caloric expenditure, including Basal Metabolic Rate (BMR) and physical activity, to help tailor weight loss or gain strategies effectively. <br />
                    <a href='https://www.health.com/how-many-calories-should-i-burn-a-day-8778183' target='_blank' className='underline'>Read More..</a>
                </p>
            </div>
        </div>
    )
}

export default UsefulResources