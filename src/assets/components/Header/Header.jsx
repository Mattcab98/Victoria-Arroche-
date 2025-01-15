import './Header.css'
import Menu from './Menu/Menu'

// IMAGENES
import LogoVictoria from '../../images/logoVictArr.png'

// ICONOS 
import { FaBars } from "react-icons/fa";
import { useState } from 'react';


const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <div className="container__logo">
                        <img src={LogoVictoria} alt="" id='logo'/>
                    </div>
                    <FaBars className='iconBars' onClick={toggleMenu}></FaBars>
                <Menu isOpen={isOpen}></Menu>
                </nav>
            </header>
        </>
    )
}
export default Header