import React from 'react';
import { useNavigate } from 'react-router-dom'; // Naya page kholne ke liye hook
import Card from '../Card/Card';
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/va.png";
import br from "../../assets/va.png";
import ise from "../../assets/va.png";
import "./Projects.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Projects() {
  const navigate = useNavigate(); // Iska use karke hum page change karenge

  // Har project ki ek unique ID bana di
  const projectData = [
    { id: "virtual-assistant", title: "Virtual Assistant", image: va },
    { id: "fitness-website", title: "Ai Powered fitness website", image: fw },
    { id: "chatbot", title: "Ai Chatbot", image: cb },
    { id: "background-remover", title: "Ai background remover", image: br },
    { id: "image-search", title: "Image search engine", image: ise }
  ];

  useGSAP(() => {
    // Aapka purana GSAP code yahan rahega...
  });

  return (
    <div id="projects">
      <h1 id="para">Projects</h1>
      <div className="slider">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            onClick={() => navigate(`/project/${project.id}`)} // Click karte hi dynamic URL par le jayega
            style={{ cursor: 'pointer' }}
          >
            <Card title={project.title} image={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
