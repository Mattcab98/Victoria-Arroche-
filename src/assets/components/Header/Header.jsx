import './Header.css'
import Menu from './Menu/Menu'

// Framer-motion
import { AnimatePresence } from 'framer-motion'


// IMAGENES
import LogoVictoria from '../../images/logoVictArr.png'

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
        <header className="header">
            <nav className="nav container">
                <div className="container__logo">
                    <img src={LogoVictoria} alt="" id="logo" />
                </div>

                <div className='container__iconMenu'>

                    {!isOpen && (
                        <HiMiniBars3 className='iconMenu iconOpen' isOpen={isOpen} toggleMenu={toggleMenu} onClick={toggleMenu}></HiMiniBars3>
                    )}

                    {isOpen && (
                        <IoClose className='iconMenu iconClose' isOpen={isOpen} toggleMenu={toggleMenu} onClick={toggleMenu}></IoClose>
                    )}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <Menu
                            key="menu"
                            isOpen={isOpen}
                            toggleMenu={toggleMenu}
                        />
                    )}
                </AnimatePresence>

            </nav>
        </header>
    );
};
export default Header;
