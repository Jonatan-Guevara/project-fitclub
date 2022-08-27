
import React, {useRef} from "react";    
import "./Join.css";
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_uur4ecb', 'template_nccodh7', form.current , 'c1zv4Sqy3bYtvmA99')
      .then((result) => {
          console.log(result.text + 'hola');
          alert('email enviado')

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div className="">
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div className="">
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your Email address" id="" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;