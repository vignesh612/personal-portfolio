import profilePic from "./assets/ph3.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// Gallery Images
import img1 from "./assets/gallery/img1.jpg";
import img2 from "./assets/gallery/img2.jpg";
import img3 from "./assets/gallery/img3.jpg";
import img4 from "./assets/gallery/img4.jpg";
import img5 from "./assets/gallery/img5.jpg";
import img6 from "./assets/gallery/img6.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-900">

        {/* NAVIGATION BAR */}
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

            {/* SITE TITLE */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Vignesh Balaji Kumar
            </h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-8 text-lg font-medium">
              <NavLink to="/" label="Home" />
              <NavLink to="/research" label="Research" />
              <NavLink to="/publications" label="Publications" />
              <NavLink to="/gallery" label="Gallery" />
              <NavLink to="/news" label="News" />
              <NavLink to="/contact" label="Contact" />
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {menuOpen && (
            <div className="md:hidden flex flex-col bg-white px-6 pb-4 text-lg gap-3 shadow">
              <MobileLink to="/" label="Home" close={() => setMenuOpen(false)} />
              <MobileLink to="/research" label="Research" close={() => setMenuOpen(false)} />
              <MobileLink to="/publications" label="Publications" close={() => setMenuOpen(false)} />
              <MobileLink to="/gallery" label="Gallery" close={() => setMenuOpen(false)} />
              <MobileLink to="/news" label="News" close={() => setMenuOpen(false)} />
              <MobileLink to="/contact" label="Contact" close={() => setMenuOpen(false)} />
            </div>
          )}
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* FOOTER */}
        <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-20">
          <div className="max-w-7xl mx-auto text-center text-md md:text-lg">
            © 2025 Vignesh Balaji Kumar — All Rights Reserved
          </div>
        </footer>

        {/* Vercel Analytics */}
        <Analytics />

      </div>
    </Router>
  );
}

/* 🔗 REUSABLE NAV COMPONENTS */
function NavLink({ to, label }) {
  return (
    <Link to={to} className="hover:text-blue-600 transition">
      {label}
    </Link>
  );
}

function MobileLink({ to, label, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="py-2 border-b border-gray-200 hover:text-blue-600 transition"
    >
      {label}
    </Link>
  );
}

/* =======================
      HOME PAGE
======================= */
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">

      {/* TEXT SECTION */}
      <div className="space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Emerging Scientist in{" "}
          <span className="text-blue-600">Computational Materials</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I am a researcher and scientific software developer working on density functional theory,
          AI-driven materials discovery, and high-performance simulations.
        </p>

        <Link
          to="/research"
          className="inline-block py-3 md:py-4 px-6 md:px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl rounded-2xl shadow-lg transition"
        >
          Explore My Research
        </Link>
      </div>

      {/* PROFILE PHOTO */}
      <div className="flex justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-white"
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
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Research Areas</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ResearchCard title="Agentic AI & Scientific Software" desc="Developing tools linking traditional computations with modern AI workflows." />
        <ResearchCard title="Quantum Simulations" desc="DFT, benchmarking, and high-accuracy quantum simulations." />
        <ResearchCard title="High-Performance Computing" desc="Parallel workloads, optimized pipelines, and cluster-level computation." />
        <ResearchCard title="AI for Materials Science" desc="Exploring new intersections between AI and computational materials." />
      </div>
    </div>
  );
}

function ResearchCard({ title, desc }) {
  return (
    <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 text-md md:text-lg">{desc}</p>
    </div>
  );
}

/* =======================
      PUBLICATIONS
======================= */
function Publications() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Publications</h2>

      <ul className="space-y-6 text-md md:text-lg">
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
      ],
    },
    {
      event: "Workshop 2023",
      photos: [
        { src: img5, caption: "Invited Lecture" },
        { src: img6, caption: "Hands-on Session" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Gallery</h2>

      <div className="space-y-16">
        {galleryEvents.map((event, idx) => (
          <div key={idx}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">{event.event}</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {event.photos.map((photo, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                  <img src={photo.src} alt={photo.caption} className="w-full h-56 md:h-64 object-cover" />
                  <div className="p-4 text-center text-gray-700 text-md md:text-lg">
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
    { date: "June 2024", text:   "Received the Rectors award for scientific achievement from the Rector of Nicolaus Copernicus University in Torun." },
    { date: "March 2024", text:  "Received the Nawa scholarchip to implement internship at the Xiamen Unievrsity in China" },
    { date: "Sept 2021", text:   "Joined the Institute of Physics, Nicolaus Copernicus University in Torun as a Doctoral Candidate" },
    { date: "March 2020", text:  "Joined Indian Institute of Science Education and Research, Bhopal as Junior Research Fellow." },
    { date: "June 2019", text:   "Qualified the Graduate Aptitute Test in Engineering(GATE-2019) in Physics conducted by the Governemnt of India" },
    { date: "Sep 2018", text:    "Joined Indian Institute of Science Education and Research, Tirupati as Research Fellow." },

  ];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Latest News & Updates</h2>

      <div className="space-y-6">
        {updates.map((u, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow border-l-4 border-blue-600">
            <h4 className="text-xl md:text-2xl font-semibold">{u.date}</h4>
            <p className="mt-2 text-gray-700 text-md md:text-lg">{u.text}</p>
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

      <p className="text-lg text-gray-700">
        <strong>Email:</strong>{" "}
        <a href="mailto:kvb612@hotmail.com" className="text-blue-600 hover:underline">
          kvb612@hotmail.com
        </a>
      </p>

      <p className="text-lg text-gray-700">
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/vigneshbalajik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/vigneshbalajik
        </a>
      </p>

      <p className="text-lg text-gray-700">
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/vignesh612"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          github.com/vignesh612
        </a>
      </p>

      <p className="text-lg text-gray-700">
        <strong>Google Scholar:</strong>{" "}
        <a
          href="https://scholar.google.com/citations?user=1uLV9jUAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          scholar.google.com/citations?user=1uLV9jUAAAAJ
        </a>
      </p>
    </div>
  );
}


