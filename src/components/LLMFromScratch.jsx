import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LLMFromScratch() {
  const faqs =  [
    {
      question: "What is a Large Language Model (LLM)?",
      answer:
        "A Large Language Model is a neural network trained on massive text datasets to understand and generate human-like language."
    },
    {
      question: "How does self-attention work?",
      answer:
        "Self-attention allows the model to determine which words in a sentence are important by computing dot products between query and key vectors."
    },
    {
      question: "What are tokens?",
      answer:
        "Tokens are numerical representations of words or subwords that the model processes."
    },
    {
      question: "What is fine-tuning?",
      answer:
        "Fine-tuning is the process of training a pretrained LLM further on domain-specific data to improve performance on specialized tasks."
    } 
     
  ];

  // Track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={kuber_styles.blogPage}>
      <h1>🚀 Kubernetes Blog</h1>
      <p>
        Learn container orchestration, scaling, pods, services, deployments, and production architecture.
      </p>

      <div style={kuber_styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} style={kuber_styles.faqItem}>
            <button
              onClick={() => toggleFAQ(index)}
              style={kuber_styles.faqButton}
            >
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && (
              <div style={kuber_styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <Link to="/teaching" style={styles.backButton}>
        ← Back to Teaching Page
      </Link>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    textAlign: "center",
    padding: "60px 20px",
    fontFamily: "system-ui",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "40px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    color: "#111",
    padding: "30px",
    borderRadius: "16px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  },
  link: {
    textDecoration: "none",
  },
  blogPage: {
    minHeight: "100vh",
    padding: "60px 20px",
    fontFamily: "system-ui",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
  },
  backButton: {
    display: "inline-block",
    marginTop: "30px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  },
};





const kuber_styles = {
  blogPage: {
    minHeight: "100vh",
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "system-ui",
    lineHeight: 1.6,
  },
  faqContainer: {
    marginTop: "30px",
  },
  faqItem: {
    marginBottom: "15px",
  },
  faqButton: {
    width: "100%",
    padding: "15px",
    fontSize: "16px",
    textAlign: "left",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f1f5f9",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s ease",
  },
  faqAnswer: {
    padding: "15px",
    borderLeft: "3px solid #2563eb",
    marginTop: "5px",
    backgroundColor: "#e2e8f0",
    borderRadius: "0 8px 8px 0",
  },
  highlightLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
    backgroundColor: "#e2e8f0", // Light gray from your FAQ answer background
    padding: "8px 16px",
    borderRadius: "8px",
    border: "2px solid #2563eb",
    display: "inline-block",
    transition: "all 0.3s ease",
    // For hover effect, you'll need state or CSS modules
  },
  backButton: {
    display: "inline-block",
    marginTop: "30px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  },
};


