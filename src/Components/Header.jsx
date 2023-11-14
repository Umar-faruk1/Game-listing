import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/Fi";
import { BsMoonFill, BsFillSunFill } from "react-icons/Bs";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        
    },[])
  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={60} height={60} />
        <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
            <FiSearch/>
            <input placeholder='Search Game' type="text" className='bg-transparent outline-none px-2'/>
        </div>
        <div>
            {theme=='light' ? <BsMoonFill className='text-[35] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}/> : <BsFillSunFill className='text-[35] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}/>}
            
        </div>
    </div>
  )
}

export default Header