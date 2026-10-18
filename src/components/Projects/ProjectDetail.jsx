import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Saare projects ki details ka data yahan store kar liya
const PROJECT_DETAILS_DB = {
  "virtual-assistant": {
    title: "Virtual Assistant",
    description: "Yeh ek desktop automation tool hai jo voice commands par kaam karta hai.",
    techStack: ["React", "Python", "Web Speech API"],
  },
  "fitness-website": {
    title: "AI Powered Fitness Website",
    description: "Yeh AI website aapke daily workouts aur calories ko track karti hai.",
    techStack: ["React", "Node.js", "TensorFlow.js"],
  },
  "chatbot": {
    title: "AI Chatbot",
    description: "Ek smart chatbot jo users ke sawalon ke automated jawab deta hai.",
    techStack: ["React", "Express", "OpenAI API"],
  }
  // Baki projects ka data bhi aise hi add kar sakte hain...
};

function ProjectDetail() {
  const { projectId } = useParams(); // URL se ID nikalne ke liye
  const navigate = useNavigate();

  // Database se clicked project ka data fetch karo
  const project = PROJECT_DETAILS_DB[projectId];

  // Agar URL mein galat ID daal di toh error handle karega
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
