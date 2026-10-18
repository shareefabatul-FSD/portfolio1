import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function Contact() {
     useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroller: "body", /* FIX 1: Changed 'scroll' to 'scroller' */
        scrub: 2,
       markers:false,
        start: "top 80%",
        end: "top 30%"
      }
    })
     gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form",
        scroller: "body", /* FIX 1: Changed 'scroll' to 'scroller' */
        scrub: 2,
        markers:false,
        start: "top 80%",
        end: "top 30%"
      }
    })
})
  return (
    <div className="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xjygjzdp" method='POST'>
                <input name = "Username" type="text"
                 placeholder ='Name'/>
                <input name = "Email" type="email"  placeholder ='Email'/>
                <textarea name="message" id="textarea" placeholder = 'Message me'></textarea>
                <input type="submit" id= "btn"  value ='Submit'/>
            </form>
        </div>
    </div>
  )
}

export default Contact
