import './Footer.css'

import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='footer'>

        <div className="container__icon">
          <a href="https://www.facebook.com/share/12F5h3e5LEy/?mibextid=wwXIfr" target='_blank'><FaFacebook className='icon' /></a>
          <a href="https://www.instagram.com/mvictoria_aa?igsh=enVzNjhoMXhvZG12" target='_blank'><FaInstagram className='icon' /></a>
          <a href="https://www.linkedin.com/in/maria-victoria-arroche-alvarez-3840bb179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'><FaLinkedin className='icon' /></a>
        </div>

        <div className="container__dir">
          <button className='buttonWp'>
            <a href="https://w.app/victoriaarrochealvarez" target='_blank'>Call Me</a>
            <FaWhatsapp className='whatpsapp' />
          </button>
        </div>
        <div className="copyright">
          &copy; 2025 Maria Victoria Arroche. Todos los derechos reservados.
        </div>
      </footer>


    </>
  )
}
export default Footer