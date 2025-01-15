import './Menu.css'

// eslint-disable-next-line react/prop-types
const Menu = ({ isOpen }) => {

    return (
        <>
            <div className={isOpen ? 'navBar open' : 'navBar'}>
                <a href="#" className="navBar__a">Home</a>
                <a href="#" className="navBar__a">About Me</a>
                <a href="#" className="navBar__a">My photographs</a>
                <a href="#" className="navBar__a">Contact</a>
            </div>
        </>
    )
}
export default Menu