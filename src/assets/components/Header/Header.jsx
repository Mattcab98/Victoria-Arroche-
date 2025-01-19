import './Header.css'
import Menu from './Menu/Menu'

// Framer-motion
import { motion, AnimatePresence } from 'framer-motion'


// IMAGENES
import LogoVictoria from '../../images/logoVictArr.png'
import Logo2 from '../../images/Cam.svg'

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

                <header className="header container px-0">

                    {/* Contenedor LOGO MARCA */}

                    <motion.img src={Logo2} alt="Logo" id="logo"
                        initial= {{rotateZ: '20deg', opacity:0, scale: 1}}
                        animate= {{ opacity: 1, scale: 1.8,rotateZ: '0deg'}}
                        transition= {{ duration: 1, ease: 'easeInOut' }}
                    />

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

                <div className="container__txt container px-0">

                    <div className='container__leftText'>

                        <div className='container__leftTitle'>
                            <h3 className='name'>Maria Victoria Arroche, professional photography.</h3>
                            <h1>Cada foto cuenta una historia.</h1>
                            <button className='btn btn-light' id='buttonContact'>¡Descubramos la tuya!</button>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quisquam nam veniam in odit perspiciatis dignissimos numquam beatae. Animi, non?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, doloribus.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet ea voluptatem ab libero quam atque quisquam incidunt ullam esse?
                            </p>
                        </div>

                        <div className="container__typePhoto">
                            <div className='typePhoto__item typePhoto__itemType '>
                                <h3>Type of photography</h3>
                                <ul>
                                    <li>Portrait photography: For personal or corporate use.</li>
                                    <li>Commercial photography: Product, advertising, or business-focused photography.</li>
                                    <li>Event photography: Weddings, conferences, or special events.</li>
                                    <li>Fine art photography: Artistic and creative expressions through photography.</li>
                                </ul>
                            </div>
                            {/* <div className='typePhoto__item typePhoto__itemAbout '>
                                <h3>About this photography</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam pariatur ducimus porro, explicabo nesciunt.</p>
                            </div> */}
                            <div className='typePhoto__item typePhoto__itemCam'>
                                <h3>Captured with Nikon D850 and AF-S NIKKOR 70-200mm f/2.8E FL ED VR Lens</h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='hola'>

            </div>
        </>
    );
};
export default Header;
