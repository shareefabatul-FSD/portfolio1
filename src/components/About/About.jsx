import React from 'react';
import "./About.css";
import Card from '../Card/Card';
import f1 from "../../assets/f1.jfif";
import f2 from "../../assets/f2.jfif";
import dsa from "../../assets/dsa.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle",
        scroller: "body", /* FIX 1: Changed 'scroll' to 'scroller' */
        scrub: 2,
        markers:false,
        start: "top 60%",
        end: "top 30%"
      }
    });

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroller: "body",
        scrub: 2,
        markers:false,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroller: "body",
        scrub: 2,
        markers:false,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroller: "body",
        scrub: 2,
        markers:false,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightaboute",
        scroller: "body",
        scrub: 2,
        markers:false,
        start: "top 60%",
        end: "top 30%"
      }
    });
  }); /* FIX 2: Added missing closing bracket here to end the useGSAP hook properly */

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name</span>: SHAREEFA BATUL</li>
              <li><span>AGE</span>: 29 Years</li>
              <li><span>Languages Known</span>: English, Marathi, Hindi, Urdu</li>
            </ul>
          </div>
          
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>Degree</span>: M.E</li>
              <li><span>Branch</span>: Electronics And Telecommunication Engineering</li>
              <li><span>CGPA</span>: 8.94</li>
            </ul>
          </div>
          
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li><span>Frontend Development:</span> HTML5, CSS3, Bootstrap, JavaScript (ES6+), ReactJS</li>
              <li><span>Backend Development:</span> Python</li>
              <li><span>Databases:</span> MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="rightabout">
        <Card title="FRONT END DEVELOPER" image={f1} />
        <Card title="BACK END DEVELOPER" image={f2} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  );
}

export default About;
