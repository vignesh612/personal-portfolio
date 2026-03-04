import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function KubernetesBlog() {
  const faqs = [
    { question:"Why Kubernetes",
      answer:
	    <div>
	    <div style={{marginBottom: '15px' }}  > Our motivation here is to provide conceptual and technical understanding of Kubernetes. For detailed and more technical informatiom, I recommend the official Kubernetes documentation which is very elaborate and comprehensive. <a href="https://kubernetes.io/docs/home/"style={kuber_styles.highlightLink}target="_blank"rel="noopener noreferrer">Official Documentation</a> 
	    </div>
            <p><strong>A Spinoff from Google's Borg</strong></p>
	    <div style={{marginBottom: '15px' }}>
             Google, engineers had already built an internal system called Borg to run massive workloads across their data centers. It worked insanely well, so a few brilliant folks like Joe Beda, Brendan Burns, and Craig McLuckie thought, “Why not build a more general, open version of this for everyone?” That project became Kubernetes, which Google open-sourced in 2014 so the whole world could use it. Then in 2015, Google basically said, “We don’t want this to look like a corporate pet project,” and donated it to the newly formed Cloud Native Computing Foundation under the umbrella of the Linux Foundation. That move made Kubernetes feel neutral and community-owned instead of “Google’s tool,” and boom — companies everywhere jumped in. And now it’s kind of the default way the cloud runs containers, which is wild when you think it started as an internal Google idea.
	    </div>

	    <p><strong>Run Containerized Applications</strong></p>
	    <div style={{marginBottom: '15px' }}>
	    Kubernetes is a opensource platform to manage containerized applications. Running applications as containers, makes our application host independent. That means you dont have to worry like "It works for me, Will it work for others". A container packages the application with all its dependencies (libraries, configuration files, binaries). This ensures it runs identically on a developer's laptop, a test server, or a cloud production environment.
	    </div>
            <p><strong>What Kubernetes can do</strong></p>
	    <div>
	     <ul style={{ marginTop: '5px', marginBottom: '10px' }}>
	     <li><strong>Runs your containers automatically:</strong> You give it your Docker containers and it decides where they should live in your cluster. No babysitting required.</li>
            <li><strong>Self-healing magic:</strong> If a container crashes? It restarts it. A node dies? It reschedules elsewhere. It’s basically the overprotective parent of your apps.</li>
            <li><strong>Auto-scaling:</strong> Traffic spikes? It spins up more instances. Traffic drops? It scales down so you’re not wasting money.</li>
            <li><strong>Load balancing:</strong> It spreads traffic evenly across your app instances so one poor container isn’t sweating alone.</li>
            <li><strong>Rolling updates (no drama deploys):</strong> You can update your app gradually without downtime. If something breaks, you can roll back like it never happened.</li>
            <li><strong>Service discovery:</strong> Containers can find and talk to each other without you hardcoding IP addresses everywhere.</li>
            <li><strong>Secret & config management:</strong> Passwords, API keys, config files — it stores and injects them safely.</li>
            <li><strong>Batch jobs & cron jobs:</strong> It’s not just web apps; it can run scheduled tasks and one-off heavy jobs too.</li>
            <li><strong>Multi-cloud friendly:</strong> Since it’s under the Cloud Native Computing Foundation, it runs on pretty much any cloud or on-prem setup without locking you in.</li>
            </ul>
	    </div>

	    </div>
    },
    {
      question: "What is Kubernetes cluster?",
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
	     <p> This is basically to ping and check if we have kubernetes properly installed. </p>
	     </div>
             <p><strong> kubectl cluster-info </strong></p>
	     <div style={{ marginLeft: '15px', marginBottom: '15px' }}>
	     <p> With this we check, if our kubernetes cluster is up and running. </p>
	     </div>
             <p><strong> kubectl get nodes </strong></p>
	     <div style={{ marginLeft: '15px', marginBottom: '15px' }}>
	     <p> This will list all the worker machines(nodes) in your Kubernetes cluster and displays their current status and basic information.  
	     </p>
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


