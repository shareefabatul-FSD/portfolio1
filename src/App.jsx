import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ProjectDetail from "./components/Projects/ProjectDetail";

// Ye aapka pura portfolio single page view hai
function MainPortfolio() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main portfolio page jo pehle khulega */}
        <Route path="/" element={<MainPortfolio />} />
        
        {/* Naya page jo card click hone par khulega */}
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
