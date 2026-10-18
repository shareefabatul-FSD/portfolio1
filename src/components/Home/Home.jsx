import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function Home() {
  useGSAP(()=>{
    let tl1 = gsap.timeline()
tl1.from(".line1", {
  y:100,
  duration:1,
  opacity:0
})
tl1.from(".line2", {
  y:100,
  duration:1,
  opacity:0
})
tl1.from(".line3", {
  y:100,
  duration:1,
  opacity:0
})
gsap.from(".righthome img",{
  x:200,
  duration:1,
  opacity:0
})
})
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Web Developer"],
    loop: true, // Loops the animation infinitely
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000, // Wait time before erasing (matches eraseDelay)
  })

  return (
   <div id="home">
     <div className="lefthome">
       <div className="homedetails">
         <div className="line1">I'M</div>
         <div className="line2">SHAREEFA BATUL</div>
         <div className="line3">
           {/* Renders the typed text along with the flashing cursor */}
           <span>{text}</span>
           <Cursor cursorStyle="|" />
         </div>
         <button>HIRE ME</button>
       </div>
     </div>
  
     <div className="righthome">
      <img src={man} alt="Illustration of a man working" />
     </div>
   </div>
  )
}

export default Home
