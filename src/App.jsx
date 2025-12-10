import profilePic from "./assets/ph3.png";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// Example Gallery Imports (add your real images)
import img1 from "./assets/gallery/img1.jpg";
import img2 from "./assets/gallery/img2.jpg";
import img3 from "./assets/gallery/img3.jpg";
import img4 from "./assets/gallery/img4.jpg";
import img5 from "./assets/gallery/img5.jpg";
import img6 from "./assets/gallery/img6.jpg";

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
              <Link to="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
              <Link to="/news" className="hover:text-blue-600 transition">News</Link>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
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

/* =======================
      HOME PAGE
======================= */
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">

      {/* Text */}
      <div className="space-y-8">
        <h2 className="text-6xl font-extrabold leading-tight tracking-tight">
          Emerging Scientist in <span className="text-blue-600">Computational Materials</span>
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          I am a researcher and scientific software developer working on density functional theory,
          AI-driven materials discovery, and high-performance simulations.
        </p>

        <Link
          to="/research"
          className="inline-block py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-2xl shadow-lg transition"
        >
          Explore My Research
        </Link>
      </div>

      {/* Profile Photo */}
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

/* =======================
      RESEARCH PAGE
======================= */
function Research() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Research Areas</h2>

      <div className="grid lg:grid-cols-2 gap-10">
        <ResearchCard
          title="Agentic AI and Scientific Software Development"
          desc="Developing tools connecting traditional scientific computations with modern AI workflows."
        />

        <ResearchCard
          title="Quantum Simulations"
          desc="Large-scale DFT, benchmarking, and high-accuracy quantum simulations."
        />

        <ResearchCard
          title="High-Performance Computing"
          desc="Optimizing workflows, parallelizing computations, and building scalable pipelines."
        />

        <ResearchCard
          title="AI4Science"
          desc="Exploring the intersection of AI and computational material science."
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

/* =======================
      PUBLICATIONS
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

/* =======================
      GALLERY PAGE
======================= */
function Gallery() {
  const galleryEvents = [
    {
      event: "Conference 2024",
      photos: [
        { src: img1, caption: "Talk Session – Day 1" },
        { src: img2, caption: "Poster Presentation" },
        { src: img3, caption: "Networking Event" },
        { src: img4, caption: "Closing Ceremony" },
      ]
    },
    {
      event: "Workshop 2023",
      photos: [
        { src: img5, caption: "Invited Lecture" },
        { src: img6, caption: "Hands-on Session" },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Gallery</h2>

      <div className="space-y-16">
        {galleryEvents.map((event, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-semibold mb-6">{event.event}</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.photos.map((photo, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center text-gray-700 font-medium">
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


/* =======================
      NEWS PAGE
======================= */
function News() {
  const updates = [
    { date: "Jan 2025", text: "Joined XYZ Lab as Research Fellow." },
    { date: "Oct 2024", text: "Presented work at International Materials Conference." },
    { date: "Apr 2024", text: "Published paper in Journal of Computational Chemistry." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Latest News & Updates</h2>

      <div className="space-y-6">
        {updates.map((u, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow border-l-4 border-blue-600"
          >
            <h4 className="text-xl font-semibold">{u.date}</h4>
            <p className="text-gray-700 mt-2 text-lg">{u.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =======================
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

