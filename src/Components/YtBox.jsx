import React from 'react'

function YtBox(props) {
    return (

        <div className="flex flex-col items-center justify-center mt-3 mx-1 sm:mx-2 ">
        <a href={props.link} target='_blank'>
          <img
            src={props.image}
            className="w-12 h-12 sm:w-15 sm:h-15 rounded-full cursor-pointer  hover:scale-120 transition-all
            delay-50 duration-300 ease-in-out"
            alt={props.name}
              loading="lazy"
          />
        </a>
      </div>
      

    )
}

export default YtBox
