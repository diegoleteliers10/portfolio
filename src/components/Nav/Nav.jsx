import { useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import {Fade} from 'react-awesome-reveal'

const Nav = () => {
  
  const [nav,setNav]= useState(false)

  const headerListener = () => {
    const headerPosition = document.querySelector("#nav");
    if (window.scrollY >= 80) headerPosition.classList.add("bg-[rgba(34,40,49,0.5)]");
    else headerPosition.classList.remove("bg-[rgba(34,40,49,0.5)]");
  };

  // I am calling the function headerListener in here.
  useEffect(()=> {
    window.addEventListener("scroll", headerListener);
  }, []);

  const listOfRefs=[
    {
      id:1,
      name:'Home',
      ref:'home'
    },
    {
      id:2,
      name:'About',
      ref:'about',
    },
    {
      id:3,
      name:'Skills',
      ref:'skills',
    },
    {
      id:4,
      name:'Experience',
      ref:'experience',
    },
    {
      id:5,
      name:'Projects',
      ref:'projects',
    },
    {
      id:6,
      name:'Contact',
      ref:'contact',
    }
  ]
  return ( 
    <div id='nav' className='flex justify-between items-center w-full h-20 pl-[5rem] pr-11 bg-[#222831] fixed z-[9999] sm:w-full sm:h-20 '>
      <Fade triggerOnce>
        <div>
          <h1 className='text-3xl text-[#D9ACF5] font-signature sm:text-[xl]'>Diego.</h1>
        </div>
      </Fade>

        <ul className='hidden z-10 md:flex'>
          <Fade direction='down' triggerOnce>
            {listOfRefs.map((item)=>
            <li key={item.id} className='px-8 focus:scale-110 focus:text-[#892CDC] text-[#EEEEEE] cursor-pointer font-medium hover:scale-110 duration-200 hover:text-[#892CDC]'>
              <Link to={item.ref} smooth={true} duration={500} >{item.name}</Link>
            </li>)}
          </Fade>
        </ul>

        <div onClick={()=>setNav(!nav)}className='cursor-pointer pr-4 z-10 md:hidden'>
          {nav?<FaTimes size={30} className='text-[#EEEEEE]'/>:<FaBars size={30} className='text-[#EEEEEE]'/>}
        </div>
        {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#222831]'>
            {listOfRefs.map((item)=>
            <li key={item.id} className='p-4 text-[#EEEEEE] cursor-pointer font-medium hover:scale-110 duration-200 hover:text-[#892CDC]'>
              <Link spy={true} smooth={true} duration={70} to={item.ref}>{item.name}</Link>
            </li>)}
          </ul>}
    </div>
  )
}

export default Nav