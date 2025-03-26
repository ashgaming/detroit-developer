// import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar';

const projects = [
  {
    title: "5-3-2 Web Card Game",
    description: "A online fun to play web card game played in 3 player.",
    image: "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743004077/mlgkpvhbndy5rhazkiqb.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express",],
    demoUrl: "https://five-three-two.onrender.com",
    githubUrl: "https://github.com/ashgaming/5-3-2"
  },
  {
    title: "Local Cleaners Services", 
    description: "A Mern Stack website for cleaning services.",
    image: "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743004516/hkppl37zmlvl2bxtu9zv.webp",
    technologies: [, "React", "MongoDB", "Express", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/ashgaming/LocalCleaners"
  },
  // {
  //   title: "AI Content Generator",
  //   description: "An AI-powered platform that generates SEO-optimized content using machine learning.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  //   technologies: ["OpenAI API", "React", "Node.js", "MongoDB"],
  //   demoUrl: "#",
  //   githubUrl: "#"
  // },
  // {
  //   title: "Smart Task Management System",
  //   description: "An AI-enhanced project management tool with automated task prioritization.",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
  //   technologies: ["MERN Stack", "Machine Learning", "WebSocket"],
  //   demoUrl: "#",
  //   githubUrl: "#"
  // }
];

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <AboutMe />
        
        <section className="py-16 md:py-20 px-4" id="portfolio">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <Services />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;