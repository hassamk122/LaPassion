import React from 'react'
import { useEffect,useState } from 'react'
import { Moon, Sun } from "lucide-react";


export default function ToggleTheme() {

    const[theme,settheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(()=>{
        if(theme == "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme",theme)
    },[theme]);

  return (
    <button
    onClick={()=> settheme(theme ==="dark"? "light":"dark")}
     className="p-2 text-white bg-dark-purpledark: dark:text-dark-purple cursor-pointer"
    >
        {theme === "dark"?<Moon size={20}/>:<Sun size={20}/>}

    </button>
  )
}
