import React from 'react'
import '../contactform/contactForm.css'

export const ContactForm = () => {
    return (
        <div className='contactForm'>
            <div className='formDiv' >
                <h1>GET IN TOUCH</h1>
               
                   <div id='innerForm'>
                   <input className='name' type="text" placeholder='Name' />
                    <input className='email' type="text" placeholder='Email' />
                    <input className='sub' type="text" placeholder='Subject' />
                    <textarea className='message' name="" placeholder='Message' id="" cols="30" rows="6 "></textarea>
                   </div>
                <button>SEND MESSAGE</button>
            </div>



        </div>
    )
}
