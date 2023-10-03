import { useState } from "react";

function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    


    // https://formspree.io/f/mdorwrzv
    return(
        <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-form">
            <form action="https://formspree.io/f/mdorwrzv" method="post">
                <div className="input-field">
                    <input type="text" name="name" placeholder="Please Enter Your Full Name" value={name} onChange={handleName} required/>
                </div>
                <div className="input-field">
                    <input type="email" name="email" placeholder="Please Enter Your Email" value={email} onChange={handleEmail} required/>
                </div>
                <div className="input-field">
                    <input type="number" name="number" placeholder="Please Enter Your Phone Number" value={phone} onChange={handlePhone} required/>
                </div>
                <div className="input-field">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message" value={message} onChange={handleMessage} required></textarea>
                </div>
                <div className="submit-btn">
                    <button>Send</button>
                </div>
            </form>
            
        </div>
    </div>
    )
}
export default Contact;