import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, Code, Database, Brain, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            KARRI RANGA RAGHAVA VARMA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Web Developer | Data Analyst
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors">
              Contact Me
            </a>
            <a href="#profile" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </header>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p>
              I'm an aspiring Python developer with hands-on experience building scalable web applications and deploying machine learning models. I enjoy working with Python frameworks, databases, and data visualization tools to create meaningful and impactful projects. I'm passionate about contributing to tech-driven organizations, bringing a collaborative mindset and a drive for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code />}
              title="Programming"
              skills={["Python", "SQL", "HTML", "CSS"]}
            />
            <SkillCard 
              icon={<Monitor />}
              title="Web Development"
              skills={["Django", "Flask", "React"]}
            />
            <SkillCard 
              icon={<Database />}
              title="Databases"
              skills={["MySQL", "MongoDB"]}
            />
            <SkillCard 
              icon={<Brain />}
              title="Machine Learning"
              skills={["Neural Networks", "Data Preprocessing", "Model Deployment"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Movie Recommendation System"
              description="Developed a movie recommendation system using machine learning models integrated with a Django full-stack application."
              tags={["Django", "Machine Learning", "Python"]}
            />
            <ProjectCard 
              title="Cyberbullying Detection"
              description="Built a deep learning model for text classification to detect cyberbullying, integrated with a Django framework."
              tags={["Deep Learning", "RNN", "Django"]}
            />
            <ProjectCard 
              title="Bank Management System"
              description="Designed a GUI-based system using Python and Tkinter with SQL for managing banking operations."
              tags={["Python", "Tkinter", "SQL"]}
            />
            <ProjectCard 
              title="TV Repair Services Website"
              description="Flask-based platform offering TV repair services with email notifications and CSV-based order tracking."
              tags={["Flask", "Python", "CSV"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <ContactButton 
              icon={<Mail />}
              text="Email Me"
              href="mailto:raghavavarma258@gmail.com"
            />
            <ContactButton 
              icon={<Phone />}
              text="Call Me"
              href="tel:+917674846979"
            />
            <ContactButton 
              icon={<Download />}
              text="Download Resume"
              href="static/files/K_Ranga_Raghava_Varma_Resume.pdf"
            />
            <ContactButton 
              icon={<Linkedin />}
              text="LinkedIn"
              href="https://www.linkedin.com/in/ranga-raghava-varma-karri-505482311/"
            />
            <ContactButton 
              icon={<Github />}
              text="GitHub"
              href="https://github.com/raghava0914"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2024 Karri Ranga Raghava Varma. All rights reserved.</p>
      </footer>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

function ContactButton({ icon, text, href }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

export default App;