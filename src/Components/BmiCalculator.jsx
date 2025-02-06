import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Weight } from 'lucide-react';
import { Ruler } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Salad } from 'lucide-react';
import { Activity } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
export default function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState(0);
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
;
    function handleWeight(e) {
        setWeight(e.target.value);
    }

    useEffect(() => {
        const feetToinches = (parseFloat(feet) || 0) * 12;
        const totalInches = feetToinches + (parseFloat(inches || 0));
        setHeight(totalInches)
    }, [feet, inches])

    function handleFeet(e) {
        setFeet(e.target.value);
    }


    function handleInches(e) {
        setInches(e.target.value);
    }




    const [BMI, setBMI] = useState('');


    function calculateBMI() {
        if (weight != '' || height != '') {
            const meter = height * 0.0254;
            setBMI(weight / (meter * meter));
        }

    }
    const outputColor = BMI < 18 ? "text-red-500" :
        BMI >= 18 && BMI < 25 ? "text-lime-500" :
            BMI >= 25 && BMI < 30 ? "text-yellow-500" :
                "text-indigo-500";
    return (
        <>
            <div id='Calculator' className='m-8 flex items-center justify-center flex-col border-2 border-white rounded-2xl sm:flex-col max-w-sm p-4
            sm:w-3xl
            dark:border-medium-purple mb-20
            '>
                <h2 className='text-white font-Poppins font-semibold text-xl dark:text-medium-purple sm:text-2xl'>BMI Calculator</h2>
                <div className='flex justify-center flex-col text-left mx-2 mt-2 '>
                    <h2 className='text-white text-xs font-Poppins my-2 flex items-center gap-1
                    dark:text-dark-purple sm:text-[14px]
                    ' htmlFor='Weight'><Weight size={15} />Weight :</h2>
                    <input type='number'  min={1} placeholder='Enter Weight in Kg' name='Weight' value={weight} onChange={handleWeight}
                        className='text-white text-xs border-2 border-white rounded-sm px-4 py-0.5 font-Poppins w-52
                        dark:border-medium-purple dark:placeholder-light-purple dark:text-medium-purple sm:w-72 sm:h-7
                        '></input>
                </div>
                <div className='flex items-center justify-center flex-col mx-2 mt-2'>
                    <h2 className='text-white text-xs font-Poppins my-2 flex items-center gap-1
                          dark:text-medium-purple sm:text-[14px] '
                        htmlFor='Height'><Ruler size={15} className='dark:text-medium-purple text-center' />Height :</h2>
                    <div className='flex gap-x-4 sm:gap-x-8'>
                        <input type='number' placeholder='Feet' min={1} name='Height' value={feet} onChange={handleFeet}
                            className='text-white  text-xs border-2 border-white rounded-sm px-1 py-0.5 font-Poppins w-24
                           dark:border-medium-purple dark:placeholder-light-purple dark:text-medium-purple placeholder:text-right
                           sm:w-32 sm:h-7
                        '></input>
                        <input type='number' placeholder='Inches' min={1} name='Height' value={inches} onChange={handleInches}
                            className='text-white  text-xs border-2 border-white rounded-sm px-1 py-0.5 font-Poppins w-24
                           dark:border-medium-purple dark:placeholder-light-purple dark:text-medium-purple placeholder:text-right
                           sm:w-32 sm:h-7
                        '></input>
                    </div>
                </div>
                <div className='flex text-center items-center justify-center flex-col mx-2 mt-2'>
                    <button className='text-white border-2 border-white rounded-sm text-xs px-4 py-0.5 font-Poppins mx-2 mt-4 mb-4 flex items-center justify-center gap-2
                    cursor-pointer dark:text-medium-purple dark:border-medium-purple sm:text-[14px]
                    hover:bg-white hover:text-medium-purple   dark:hover:bg-medium-purple dark:hover:text-white
                    transition delay-50 duration-300 ease-in-out
                    ' onClick={calculateBMI} >Calculate </button>
                    <div className='font-Poppins'>
                        <h3 className={`${outputColor} text-xl sm:text-xl`}>{BMI == '' ? (<> </>) : (<>{BMI.toFixed(2)}<small> kg/m<sup>2</sup></small></>)}</h3>
                        <p className='text-white mt-3 text-xm  text-center flex items-center justify-center gap-2 sm:text-xl
                        dark:text-medium-purple
                        '>

                            {BMI == '' ? (
                                <>
                                </>
                            ) :
                                BMI < 18 ? (
                                    <>
                                        <Salad size={20} />Under Weight!
                                    </>
                                ) : BMI >= 18 && BMI < 25 ? (
                                    <>
                                        <HeartHandshake /> Normal Weight
                                    </>
                                ) : BMI >= 25 && BMI < 30 ? (
                                    <>
                                        <Activity size={20} />Over Weight
                                    </>
                                ) : (
                                    <>
                                        <HeartPulse size={20} />Obese
                                    </>
                                )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

