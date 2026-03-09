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
    },
    {
        question: "What is Multi-Head Attention in Large Language Models?",
  answer: (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          backgroundColor: '#e6f3ff', 
          padding: '15px', 
          borderRadius: '8px',
          borderLeft: '4px solid #2563eb',
          marginBottom: '20px'
        }}>
          <strong>🎯 Quick Analogy:</strong> Imagine you're analyzing a complex scene. One person focuses on colors, another on shapes, another on movements, and another on spatial relationships. Together, they give you a complete understanding. That's exactly what multi-head attention does — it's like having multiple experts analyzing different aspects of language simultaneously.
        </div>
      </div>

      <p><strong>The Problem: Single Attention Isn't Enough</strong></p>
      <div style={{ marginBottom: '20px' }}>
        Before multi-head attention, transformers used single attention mechanisms. Think of this like reading a sentence with just one perspective — you might capture the main subject but miss nuances, relationships, or contextual subtleties. It's like watching a movie with only the dialogue track but no music, sound effects, or visual cues.
      </div>

      <p><strong>The Brilliant Solution: Multiple Perspectives</strong></p>
      <div style={{ marginBottom: '20px' }}>
        Multi-head attention, introduced in the groundbreaking <a href="https://arxiv.org/abs/1706.03762" style={{...llm_styles.highlightLink, color: '#2563eb', fontWeight: '500'}} target="_blank" rel="noopener noreferrer">"Attention Is All You Need"</a> paper by Vaswani et al. (2017), solves this by running multiple attention operations in parallel. Each "head" learns to focus on different types of relationships:
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '15px',
        marginBottom: '25px'
      }}>
        
        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔍 Head 1: Syntactic Relationships</div>
          <div style={{ color: '#4b5563' }}>Focuses on grammar and sentence structure. It might track how "the cat" relates to "sat" in "the cat sat on the mat."</div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🌍 Head 2: Semantic Meaning</div>
          <div style={{ color: '#4b5563' }}>Captures word meanings and concepts. Understands that "bank" in "river bank" is different from "savings bank."</div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔄 Head 3: Long-range Dependencies</div>
          <div style={{ color: '#4b5563' }}>Tracks relationships across distant parts of text. Connects "John" mentioned at the start with "he" three paragraphs later.</div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📍 Head 4: Positional Relationships</div>
          <div style={{ color: '#4b5563' }}>Focuses on word order and proximity. Understands that "not" before "good" changes the meaning.</div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🎭 Head 5: Coreference Resolution</div>
          <div style={{ color: '#4b5563' }}>Figures out what pronouns refer to. Knows that "they" in a sentence refers to "the researchers" mentioned earlier.</div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📊 Head 6: Entity Recognition</div>
          <div style={{ color: '#4b5563' }}>Identifies and tracks named entities like people, places, organizations across the text.</div>
        </div>
      </div>

      <p><strong>How It Actually Works (The Technical Bit Made Simple)</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Split the attention:</strong> The model takes the input and projects it into multiple smaller representations (one per head).</li>
          <li><strong>Parallel processing:</strong> Each head performs its own attention calculation independently.</li>
          <li><strong>Concatenate results:</strong> All head outputs are combined into a single rich representation.</li>
          <li><strong>Final projection:</strong> The combined result goes through one last linear transformation.</li>
        </ol>
        
        <div style={{
          backgroundColor: '#1f2937',
          color: '#e5e7eb',
          padding: '15px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '0.9em',
          overflowX: 'auto',
          marginTop: '15px'
        }}>
          <code>
            # Simplified pseudocode<br/>
            multi_head_output = []<br/>
            for head in range(num_heads):<br/>
            &nbsp;&nbsp;head_output = attention(query_head, key_head, value_head)<br/>
            &nbsp;&nbsp;multi_head_output.append(head_output)<br/>
            final_output = concatenate(multi_head_output) * output_weights
          </code>
        </div>
      </div>

      <p><strong>Why Multiple Heads Are Better Than One</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>🎨 Richer representations:</strong> Each head captures different linguistic features, creating a more nuanced understanding.</li>
          <li><strong>⚡ Parallel efficiency:</strong> All heads compute simultaneously, making it computationally efficient despite doing more work.</li>
          <li><strong>🛡️ Redundancy and robustness:</strong> If one head misses something, another might catch it. It's like having multiple reviewers check your work.</li>
          <li><strong>🔬 Specialization:</strong> Heads naturally specialize through training, like experts developing their own areas of focus.</li>
          <li><strong>📈 Better gradient flow:</strong> Multiple attention pathways help with training deep networks.</li>
        </ul>
      </div>

      <p><strong>Real-World Example: "The animal didn't cross the street because it was too tired"</strong></p>
      <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#2563eb', color: '#ffffff' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Attention Head</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>What It Focuses On</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>What It Learns</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>Head 1 (Syntax)</td>
              <td style={{ padding: '12px' }}>Subject-verb agreement</td>
              <td style={{ padding: '12px' }}>"animal" → "didn't cross"</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>Head 2 (Coreference)</td>
              <td style={{ padding: '12px' }}>Pronoun resolution</td>
              <td style={{ padding: '12px' }}>"it" → "animal" (not "street")</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: '500' }}>Head 3 (Causality)</td>
              <td style={{ padding: '12px' }}>Cause and effect</td>
              <td style={{ padding: '12px' }}>"tired" → "didn't cross"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Practical Implications in Modern LLMs</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>GPT-3/4:</strong> Uses 96 attention heads working together to generate coherent, contextually aware text</li>
          <li><strong>BERT:</strong> Employs 12-16 heads to understand bidirectional context for tasks like question answering</li>
          <li><strong>LLaMA:</strong> Implements multi-head attention with optimizations for efficiency at scale</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#e6f3ff', 
        padding: '20px', 
        borderRadius: '8px',
        borderLeft: '4px solid #2563eb',
        marginTop: '25px'
      }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Key Takeaway:</strong> Multi-head attention is like having multiple interpreters reading the same text simultaneously, each focusing on different aspects — grammar, meaning, context, relationships — then combining their insights to give you a complete, nuanced understanding. It's one of the key innovations that makes modern LLMs so remarkably good at understanding and generating human language.
        </p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#6b7280' }}>
        <strong>Want to dive deeper?</strong> Check out Jay Alammar's <a href="https://jalammar.github.io/illustrated-transformer/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">The Illustrated Transformer</a> for visual explanations, or the original <a href="https://arxiv.org/abs/1706.03762" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">research paper</a> for the mathematical details.
      </p>
    </div>
  )
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


