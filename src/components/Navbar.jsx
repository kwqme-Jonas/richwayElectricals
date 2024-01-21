import { useEffect, useState } from 'react';
import React from 'react';
import {Link} from 'react-scroll';
import logo from '../assets/logo.png';
import {FaXmark,  FaBars} from 'react-icons/fa6';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrolly > 100){
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  });

  //navbar items array
  const navItems = [
    {link: "Home", path: "home"},
    {link: "About", path: "about"},
    {link: "services", path: "services"},
    {link: "Contact", path: "contact"},
  ];

   
  return (
    <header className='w-full, bg-white fixed top-0 left-0 right-0 border-b shadow-sm'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" :""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt='' className='w-10 inline-block items-center'/><span className='text-orange-500'>RichwayElectricals</span></a>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-700 hover:text-orange-400 first:font-medium cursor-pointer'>{link}</Link>)
                    }
                </ul>

                {/*menu for devices*/}
                 <div className='md:hidden'>
                    <button 
                    onClick={toggleMenu}
                    className='text-neutraDlGrey focus:outline-none focus:text-orange-400'>
                        {
                            isMenuOpen ? (<FaXmark  className='h-6 w-6 text-neutraDlGrey'/>) : (<FaBars className='h-6 w-6 text-neutraDlGrey'/>)
                        }
                    </button>
                 </div>
            </div>
        </nav>

        {/*nav items for mobile*/}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-orange-400 ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
             navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-700 hover:text-white first:font-medium cursor-pointer'>{link}</Link>)
          }
        </div>
    </header>
  )
}

export default Navbar