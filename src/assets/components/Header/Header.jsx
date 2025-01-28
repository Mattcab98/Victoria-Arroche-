import './Header.css'
import Menu from './Menu/Menu'


// Framer-motion
import { motion, AnimatePresence } from 'framer-motion'



// IMAGENES
import Logo2 from '../../images/Cam.svg'

// ICONOS 
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


import { useState, useRef, useEffect } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // CERRAR MENU RESPONSIVE AL CLICKEAR EN CUALQUIAR LUGAR DE LA PANTALLA
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className="container__hero">

                <header className="header container" id='home'>

                    {/* Contenedor LOGO MARCA */}

                    <motion.img src={Logo2} alt="Logo" id="logo"
                        initial={{ rotateZ: '20deg', opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.8, rotateZ: '0deg' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    />

                    {!isOpen && (
                        <HiMenu className='iconMenu iconOpen' onClick={toggleMenu} />
                    )}

                    {isOpen && (
                        <AiOutlineClose className='iconMenu iconClose' onClick={toggleMenu} />
                    )}


                    {/* Componente menu responsive */}

                    <div className='container__menuResponsive' ref={menuRef}>
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
                            <a href='#home' className="navBar__a">Home</a>
                            <a href='#aboutme' className="navBar__a">About Me</a>
                            <a href='#myphotographs' className="navBar__a">My photographs</a>
                            <a href='#contact' className="navBar__a">Contact</a>
                        </div>
                    </nav>

                </header>

                <div className="container__txt container">

                    <div className='container__leftText'>

                        <div className='container__leftTitle'>
                            <h3 className='name'>Maria Victoria Arroche, professional photography.</h3>
                            <h1>Cada foto cuenta una historia.</h1>
                            <button className='btn btn-light' id='buttonContact'>¡Descubramos la tuya!</button>
                            <p>Cada fotografía es un portal al pasado, un testigo silencioso de un instante irrepetible. Captura no solo la imagen, sino también las emociones, los detalles y las historias que envuelven ese momento. Es el arte de detener el tiempo, de preservar aquello que las palabras no siempre pueden expresar. Una fotografía no solo muestra lo que sucedió, sino cómo se sintió, permitiéndonos revivir una y otra vez la magia de aquel instante.
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
                            <div className='typePhoto__item typePhoto__itemCam'>
                                <h3>Captured with Nikon D850 and AF-S NIKKOR 70-200mm f/2.8E FL ED VR Lens</h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};
export default Header;
