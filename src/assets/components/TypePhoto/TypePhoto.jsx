import './TypePhoto.css'



const TypePhoto = () => {
    return (
        <>
            <section className='typePhoto container' id='myphotographs'>

                <h2 className='tittle__typePhoto'>Type of photography</h2>

                <div className='container__category'>
                    <div className="category category1">
                        <h2>Portrait photography</h2>
                    </div>
                    <div className="category category2">
                        <h2>Concerts photography</h2>
                    </div>
                    <div className="category category3">
                        <h2>Event photography</h2>
                    </div>
                </div>

                <button className='btn btn-light' id='buttonGallery'>
                    <a href="" target='_blank' > My Gallery Photographs </a>
                </button>
            </section>
        </>
    )
}
export default TypePhoto