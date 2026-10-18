import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const PROJECT_DETAILS_DB = {
  "virtual-assistant": {
    title: "Virtual Assistant",
    description: "desktop automation whxih works on  voice commands.",
    techStack: ["React", "Python", "Web Speech API"],
  },
  "fitness-website": {
    title: "AI Powered Fitness Website",
    description: "AI website which tracks daily workouts and calories .",
    techStack: ["React", "Node.js", "TensorFlow.js"],
  },
  "chatbot": {
    title: "AI Chatbot",
    description: "smart chatbot which give users automated answers.",
    techStack: ["React", "Express", "OpenAI API"],
  }
  
};

function ProjectDetail() {
  const { projectId } = useParams(); 
  const navigate = useNavigate();

 
  const project = PROJECT_DETAILS_DB[projectId];

  
  if (!project) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
        <h2>Project nahi mila!</h2>
        <button onClick={() => navigate('/')}>Home Page Par Jayein</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: "20px", padding: "10px 20px" }}>
        ← Back to Portfolio
      </button>
      
      <h1>{project.title}</h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>{project.description}</p>
      
      <h3>Technologies Used:</h3>
      <ul>
        {project.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;
