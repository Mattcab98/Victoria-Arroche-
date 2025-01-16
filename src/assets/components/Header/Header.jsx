import './Header.css'
import Menu from './Menu/Menu'

// Framer-motion
import {AnimatePresence } from 'framer-motion'


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
        <>
            <div className="container__hero">

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

                <h1>Donde las Imágenes Hablan</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis dolor amet facere saepe. Quod repellendus fugiat fuga atque iusto?</p>
            </div>
            
            <div className='hola'>
                
            </div>
        </>
    );
};
export default Header;
