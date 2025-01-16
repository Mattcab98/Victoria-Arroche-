import './Menu.css'

// Framer-motion
import { motion } from "framer-motion";


// eslint-disable-next-line react/prop-types
const Menu = ({ isOpen }) => {

    return (
        <>
            <motion.div className={isOpen ? 'navBar open' : 'navBar'}
            initial= { { opacity: 0, x: 200}}
            animate= {{ opacity:1 , x: 0}}
            transition={ {duration: .8, ease: 'easeOut' }}
            exit = { { opacity: 0, x: 200, transition: {duration: 1, ease: 'easeInOut'} } }
            >
                <a href="#" className="navBar__a">Home</a>
                <a href="#" className="navBar__a">About Me</a>
                <a href="#" className="navBar__a">My photographs</a>
                <a href="#" className="navBar__a">Contact</a>
            </motion.div>
        </>
    )
}
export default Menu