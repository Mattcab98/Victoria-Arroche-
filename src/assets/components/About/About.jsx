import './About.css'

import victoria from '../../images/victoria.jpg'

const About = () => {
    return (
        <>
            <div className="container__about">
                <div className="containerDos">
                    <div className="about__left">
                        <div className="container__photoVictoria"></div>
                    </div>

                    <div className="about__right">
                        <div className="about__right-txt">
                            <h2>SOBRE MI</h2>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sed voluptates numquam ipsa repellat deserunt eligendi mollitia sunt facere vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, fugiat recusandae impedit neque distinctio nihil consectetur ipsum beatae architecto consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About