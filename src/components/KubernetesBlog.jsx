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


