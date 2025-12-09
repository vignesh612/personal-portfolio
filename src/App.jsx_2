import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
        <nav className="w-full shadow bg-white/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold tracking-tight">Vignesh Balaji Kumar</h1>
            <div className="flex gap-6 text-lg">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/research" className="hover:text-blue-600">Research</Link>
              <Link to="/publications" className="hover:text-blue-600">Publications</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-10 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-5xl font-extrabold leading-tight">
          Emerging Scientist in <span className="text-blue-600">Computational Materials</span>
        </h2>
        <p className="text-xl text-gray-700">
	  I am a reseacher and scientific software developer. My field of research is computational material science with primary focus on developing methods for density functional theory.  
          I explore the intersection of AI, quantum chemistry, and materials discovery. My research focuses on accelerating functional material prediction and design using machine learning and high‑performance simulations.
        </p>
        <Link
          to="/research"
          className="py-3 px-6 text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow"
        >
          Explore My Research
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-xl"></div>
      </div>
    </div>
  );
}

function Research() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12">
      <h2 className="text-4xl font-bold">Research Areas</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <ResearchCard
          title="AI‑Driven Materials Discovery"
          desc="Building machine learning models to accelerate prediction of electronic, thermodynamic, and structural properties."
        />
        <ResearchCard
          title="Quantum Simulations"
          desc="Large‑scale DFT, wave‑function methods, and benchmarking using state‑of‑the‑art basis sets and computational frameworks."
        />
        <ResearchCard
          title="High‑Performance Computing"
          desc="Parallelizing workflows, automating simulations, and developing pipelines for large materials datasets."
        />
        <ResearchCard
          title="Generative Models in Materials Science"
          desc="Exploring foundation models for molecules, crystals, and microstructures."
        />
      </div>
    </div>
  );
}

function ResearchCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function Publications() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h2 className="text-4xl font-bold">Publications</h2>
      <ul className="space-y-4 text-gray-700 text-lg">
        <li className="p-4 bg-white rounded-xl shadow">• Title of Research Paper 1 – Journal (Year)</li>
        <li className="p-4 bg-white rounded-xl shadow">• Title of Research Paper 2 – Journal (Year)</li>
        <li className="p-4 bg-white rounded-xl shadow">• Title of Research Paper 3 – Journal (Year)</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-gray-700 text-lg">Email: your.email@example.com</p>
      <p className="text-gray-700 text-lg">LinkedIn: /yourprofile</p>
      <p className="text-gray-700 text-lg">GitHub: /yourprofile</p>
      <p className="text-gray-700 text-lg">Google Scholar: /yourprofile</p>
    </div>
  );
}

