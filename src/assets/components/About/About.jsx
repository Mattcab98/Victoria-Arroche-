import './About.css'

// import victoria from '../../images/victoria.jpg'

const About = () => {
    return (
        <>
            <div className="container__about">
                <div className="containerDos  container">
                    <div className="about__left">
                        <div className="container__photoVictoria"></div>
                    </div>

                    <div className="about__right">
                        <div className="about__right-txt">
                            <h2>I'm <strong>Maria Victoria</strong></h2>
                            <h3>Un arte que me conecta con mi historia.</h3>
                            <p>La fotografía es parte de mi esencia. Crecí aprendiendo de mi padre, también fotógrafo, y heredé su pasión por capturar momentos únicos. Cada imagen que tomo cuenta una historia, buscando siempre transmitir emociones y crear recuerdos que perduren.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About