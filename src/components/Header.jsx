import { useState } from "react";
import IconSun from "./icons/IconSun";
import Moon from "./icons/Moon";
import { useEffect } from "react";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark' ? true : false;

const Header = () =>{

    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light');
        }

    },[darkMode]);

    return(
        <header className="container max-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ?  <IconSun /> : <Moon />
                }
            </button>
            </div>
        </header>
    )
}

export default Header