import './Carousel.css'
import { useState } from 'react'


import Saxo from '../../images/saxo.jpg'
import Voz1 from '../../images/voz1.jpg'
import Voz2 from '../../images/voz2.jpg'
import Voz3 from '../../images/voz3.jpg'
import Voz4 from '../../images/vozBate.jpg'
import Escenario from '../../images/escenario.jpg'

const galeryImage = [
    { id: 1, src: Saxo, alt: 'Foto saxofon' },
    { id: 2, src: Voz1, alt: 'Foto saxofon' },
    { id: 3, src: Voz2, alt: 'Foto saxofon' },
    { id: 4, src: Voz3, alt: 'Foto saxofon' },
    { id: 5, src: Voz4, alt: 'Foto saxofon' },
    { id: 6, src: Escenario, alt: 'Foto saxofon' },
]


const Carousel = () => {

    const [images, setImage] = useState(galeryImage)

    return (
        <>
            <div className="">

                <div className="container__img">
                    {images.map((image) => (
                        <img key={image.id} src={image.src} alt={image.alt} />
                    ))}
                </div>

            </div>
        </>
    )
}
export default Carousel