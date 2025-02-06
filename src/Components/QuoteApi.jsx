import React, { useState, useEffect } from 'react';

function QuoteApi() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);
  const [Generate,setGenerate] =useState(true);

  function handleGenerate(){
    setGenerate(true);
  }
  useEffect(() => {
    if(Generate){
    fetch('./quotes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Falied to fetch data");
        }
        return response.json(); 
      })
      .then(data => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(`"${randomQuote.quote}"`); 
        setAuthor(`-${randomQuote.author}`); 
        setGenerate(false);
      })
      .catch(e => {
        console.error('Fetch error: ', e); 
        setError('Error fetching quote');
      });
    }
  }, [Generate]);

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className='flex items-center flex-col justify-center mx-5 font-Poppins mt-20 sm:mt-40'>
      <p className='text-center text-2xl text-white dark:text-zinc-800 drop-shadow-[0_10px_45px_rgba(255,255,255,0.25)]'>{quote}</p>
      <p className='text-left text-xl; text-zinc-400 dark:text-zinc-700'><small>{author}</small></p>
      <button className='text-white bg-light-purple rounded-sm px-2 py-1 mt-3 cursor-pointer hover:scale-110
      transition delay-50 duration-300 ease-in-out' onClick={handleGenerate}>Randomize</button>
    </div>
  );
}

export default QuoteApi;
