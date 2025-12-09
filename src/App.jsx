import profilePic from "./assets/ph3.png";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-900">

        {/* Navigation */}
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Vignesh Balaji Kumar</h1>
            <div className="flex gap-8 text-lg font-medium">
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
              <Link to="/research" className="hover:text-blue-600 transition">Research</Link>
              <Link to="/publications" className="hover:text-blue-600 transition">Publications</Link>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20">
          <div className="max-w-7xl mx-auto text-center text-lg">
            © 2025 Vignesh Balaji Kumar — All Rights Reserved
          </div>
        </footer>

      </div>
    </Router>
  );
}

/* ======================
   HOME PAGE
======================= */
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">
      
      {/* Text Section */}
      <div className="space-y-8">
        <h2 className="text-6xl font-extrabold leading-tight tracking-tight">
          Emerging Scientist in <span className="text-blue-600">Computational Materials</span>
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          I am a researcher and scientific software developer working on density functional theory,
          AI-driven materials discovery, and high-performance simulations. I focus on building
          accurate computational models and accelerating materials prediction using machine learning.
        </p>

        <Link
          to="/research"
          className="inline-block py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-2xl shadow-lg transition"
        >
          Explore My Research
        </Link>
      </div>

      <div className="flex justify-center">
         <img 
            src={profilePic} 
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-white"
         />
      </div>


    </div>
  );
}

/* ======================
   RESEARCH PAGE
======================= */
function Research() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Research Areas</h2>

      <div className="grid lg:grid-cols-2 gap-10">
        <ResearchCard
          title="AI-Driven Materials Discovery"
          desc="Developing machine learning models to accelerate prediction of electronic,
          structural, and thermodynamic properties."
        />
        <ResearchCard
          title="Quantum Simulations"
          desc="Large-scale DFT, benchmarking methods, and high-accuracy quantum simulations
          for materials and molecules."
        />
        <ResearchCard
          title="High-Performance Computing"
          desc="Optimizing workflows, parallelizing computations, and building scalable
          pipelines for materials data."
        />
        <ResearchCard
          title="Generative Models for Materials"
          desc="Exploring foundation models to design molecules, crystals, and microstructures."
        />
      </div>
    </div>
  );
}

function ResearchCard({ title, desc }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

/* ======================
   PUBLICATIONS PAGE
======================= */
function Publications() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Publications</h2>

      <ul className="space-y-6 text-lg">
        <li className="p-5 bg-white rounded-xl shadow">• Research Paper Title 1 — Journal (Year)</li>
        <li className="p-5 bg-white rounded-xl shadow">• Research Paper Title 2 — Journal (Year)</li>
        <li className="p-5 bg-white rounded-xl shadow">• Research Paper Title 3 — Journal (Year)</li>
      </ul>
    </div>
  );
}

/* ======================
   CONTACT PAGE
======================= */
function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20 space-y-6">
      <h2 className="text-4xl font-bold tracking-tight">Contact</h2>

      <p className="text-lg text-gray-700">Email: your.email@example.com</p>
      <p className="text-lg text-gray-700">LinkedIn: /yourprofile</p>
      <p className="text-lg text-gray-700">GitHub: /yourprofile</p>
      <p className="text-lg text-gray-700">Google Scholar: /yourprofile</p>
    </div>
  );
}

