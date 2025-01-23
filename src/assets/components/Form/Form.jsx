import { useState } from 'react';
import './Form.css'
import Swal from 'sweetalert2'

const Form = () => {

    const [setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a94c1c75-124c-4107-a858-550944870225");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully!',
                icon: 'success'
            });
            // event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (

        <>

            <section className="contact">


                <form onSubmit={onSubmit} className='contact__form'>

                    <h2>Contact Me</h2>

                    <div className="input-box">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className='field' placeholder='Enter your name' name='name' id='name'required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className='field' placeholder='Enter your email' name='email' id='email' required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="phone">Telefono</label>
                        <textarea type='tel' name="tel" id="phone" className='field tel' placeholder='Enter your phone number' required></textarea>
                    </div>

                    <div className="input-box">
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id="message" className='field mess' placeholder='Enter your message' required></textarea>
                    </div>

                    <button type='submit' className='btn btn-light ' id='btn__form'>Send Message</button>
                </form>

            </section>
            <hr />

        </>

    )
}
export default Form