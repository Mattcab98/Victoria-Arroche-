import './Footer.css'

import { FaFacebook, FaInstagram, FaTwitch, FaWhatsapp, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='footer'>

        <div className="container__icon">
          <a href="#"><FaFacebook className='icon' /></a>
          <a href="#"><FaInstagram className='icon' /></a>
          <a href="#"><FaTwitch className='icon' /></a>
          <a href="#"><FaWhatsapp className='icon' /></a>
          <a href="#"><FaYoutube className='icon' /></a>
          <a href="#"><FaPinterest className='icon' /></a>
        </div>

        <div className="container__dir">
          <a href="#" className="footer__a"> LinkedIn</a>
          <a href="#" className="footer__a">PayPal</a>
          <a href="#" className="footer__a">My Works</a>
        </div>

        <div className="copyright">
          &copy; 2025 Maria Victoria Arroche. Todos los derechos reservados.
        </div>
      </footer>


    </>
  )
}
export default Footer