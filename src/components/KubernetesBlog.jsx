import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function KubernetesBlog() {
  const faqs = [
    {
      question: "What is Kubernetes?",
      answer:
        "Kubernetes is a container orchestration system that automates deployment, scaling, and management of containerized applications.",
    },
    {
      question: "What is Kubernetes cluste?",
      answer: (
        <div>
          <p>A Kubernetes cluster is a set of machines (nodes) that work together to run containerized applications. Think of it as a 'supercomputer' made up of multiple computers that act as one unified system.</p>
          
          <p><strong>A Kubernetes cluster consists of two main components:</strong></p>
          
          <div style={{ marginLeft: '15px', marginBottom: '15px' }}>
            <p><strong>1. The Control Plane (The Brain) 🧠</strong> - Manages and orchestrates the cluster:</p>
            <ul style={{ marginTop: '5px', marginBottom: '10px' }}>
              <li><strong>API Server:</strong> The front door - all communications go through here</li>
              <li><strong>Scheduler:</strong> Decides which node runs which application</li>
              <li><strong>Controller Manager:</strong> Ensures the desired state is maintained</li>
              <li><strong>etcd:</strong> The cluster's memory - stores all configuration data</li>
            </ul>
            
            <p><strong>2. The Worker Nodes (The Muscles) 💪</strong> - Actually run your applications:</p>
            <ul style={{ marginTop: '5px', marginBottom: '10px' }}>
              <li><strong>Kubelet:</strong> The node's agent that communicates with the control plane</li>
              <li><strong>Container Runtime:</strong> Runs the containers (like Docker)</li>
              <li><strong>Kube-proxy:</strong> Handles networking and load balancing</li>
              <li><strong>Pods:</strong> The actual containers running your applications</li>
            </ul>
          </div>

          <p><strong>Key Benefits of a Cluster:</strong></p>
          <ul style={{ marginTop: '5px' }}>
            <li><strong>High Availability:</strong> If one node fails, apps run on other nodes</li>
            <li><strong>Load Balancing:</strong> Distributes traffic automatically across nodes</li>
            <li><strong>Scalability:</strong> Easily add or remove nodes based on demand</li>
            <li><strong>Self-Healing:</strong> Automatically restarts failed containers</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are Pods?",
      answer:
        "A Pod is the smallest deployable unit in Kubernetes, representing one or more containers that are deployed together.",
    },
    {
      question: "What is a Deployment?",
      answer:
        "A Deployment manages a set of identical Pods, ensuring the desired number of replicas are running at all times.",
    },
    {
      question: "How does scaling work?",
      answer:
        "Kubernetes can automatically scale pods up or down based on resource usage or custom metrics using the Horizontal Pod Autoscaler.",
    },
    {
      question: "What are Services in Kubernetes?",
      answer:
        "Services provide stable network endpoints to access a group of Pods and enable communication between different components.",
    },
    {	  
     question: "Some well known Kubernetes commands",
     answer:
	  <div>
             <p><strong> kubectl version </strong></p>
	     <div style={{ marginLeft: '15px', marginBottom: '15px' }}>
	     <p> This is basically to ping and check if we have kubernetes properly installed </p>
	     </div>
          </div>
     },

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
  backButton: {
    display: "inline-block",
    marginTop: "30px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  },
};


