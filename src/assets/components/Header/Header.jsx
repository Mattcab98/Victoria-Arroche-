import './Header.css'
import Menu from './Menu/Menu'

// Framer-motion
import { motion, AnimatePresence } from 'framer-motion'


// IMAGENES
import LogoVictoria from '../../images/logoVictArr.png'
import ImageHero from '../../images/merc3.jpg'

// ICONOS 
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <header className="header container">

                {/* Contenedor LOGO MARCA */}

                <img src={LogoVictoria} alt="" id="logo" />

                {!isOpen && (
                    <HiMiniBars3 className='iconMenu iconOpen' onClick={toggleMenu}></HiMiniBars3>
                )}

                {isOpen && (
                    <IoClose className='iconMenu iconClose' onClick={toggleMenu}></IoClose>
                )}


                {/* Componente menu responsive */}

                <div className='container__menuResponsive'>
                    <AnimatePresence>
                        {isOpen && (
                            <Menu
                                className="menuResponsive"
                                key="menu"
                                isOpen={isOpen}
                                toggleMenu={toggleMenu}
                            />
                        )}
                    </AnimatePresence>
                </div>

                <nav className='navDesktop'>
                    <div className='container__navDesktop'>
                        <a href="#" className="navBar__a">Home</a>
                        <a href="#" className="navBar__a">About Me</a>
                        <a href="#" className="navBar__a">My photographs</a>
                        <a href="#" className="navBar__a">Contact</a>
                    </div>
                </nav>

            </header>

        </>
    );
};
export default Header;
