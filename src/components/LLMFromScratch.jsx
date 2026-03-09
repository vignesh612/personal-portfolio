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
  question: "What are tokens in Large Language Models?",
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
          <strong>🎯 Quick Analogy:</strong> Think of tokens like LEGO bricks. Just as you build complex structures by connecting individual LEGO pieces, language models build understanding by processing text as individual tokens. Some bricks are small (single letters), some are larger (whole words), but together they create everything from simple sentences to entire books.
        </div>
      </div>

      <p><strong>The Basic Concept: What Exactly Is a Token?</strong></p>
      <div style={{ marginBottom: '20px' }}>
        In the world of Large Language Models, a <strong>token</strong> is the basic unit of text that the model processes. It's how we break down human language into pieces that a computer can understand and work with. Think of it as the "atom" of language for AI — the smallest meaningful chunk that the model can process.
      </div>

      <p><strong>Tokens Come in Different Flavors</strong></p>
      <div style={{ marginBottom: '20px' }}>
        Depending on the tokenizer (the system that chops up text), tokens can be:
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px',
          marginTop: '15px'
        }}>
          
          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📝 Whole Words</div>
            <div style={{ color: '#4b5563' }}>"apple" → ["apple"]<br/>"running" → ["running"]</div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔤 Subwords</div>
            <div style={{ color: '#4b5563' }}>"unbelievable" → ["un", "believe", "able"]<br/>"playing" → ["play", "ing"]</div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔡 Individual Characters</div>
            <div style={{ color: '#4b5563' }}>"cat" → ["c", "a", "t"]<br/>"hello" → ["h", "e", "l", "l", "o"]</div>
          </div>
        </div>
      </div>

      <p><strong>Why Can't We Just Use Words?</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          backgroundColor: '#f9fafb', 
          padding: '15px', 
          borderRadius: '8px',
          marginBottom: '15px'
        }}>
          Great question! Here's why subword tokens (the most common approach) are brilliant:
        </div>
        
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>📚 Vocabulary size:</strong> English has ~170,000 words. A model can't have embeddings for all of them (too big!). Tokens keep vocabulary manageable (typically 30,000-50,000 pieces).</li>
          <li><strong>✨ Handles new words:</strong> When the model sees "cryptocurrency" for the first time, it can break it into ["crypto", "currency"] — words it already knows!</li>
          <li><strong>🔤 Handles typos:</strong> "teh" can be understood as ["te", "h"] or recognized as a common misspelling of "the".</li>
          <li><strong>🌍 Language efficiency:</strong> Works across languages — German compound words can be split, Chinese characters can be handled individually.</li>
        </ul>
      </div>

      <p><strong>Visualizing Tokenization: Before and After</strong></p>
      <div style={{ marginBottom: '25px' }}>
        <div style={{
          backgroundColor: '#1f2937',
          color: '#e5e7eb',
          padding: '20px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '1em',
          marginBottom: '15px'
        }}>
          <div style={{ color: '#9ca3af', marginBottom: '10px' }}>📥 Input Text:</div>
          <div>"I love learning about artificial intelligence!"</div>
          
          <div style={{ color: '#9ca3af', marginTop: '20px', marginBottom: '10px' }}>📤 Tokenized Output (simplified):</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={tokenPill}>["I"</span>
            <span style={tokenPill}>"love"</span>
            <span style={tokenPill}>"learning"</span>
            <span style={tokenPill}>"about"</span>
            <span style={tokenPill}>"art"</span>
            <span style={tokenPill}>"ificial"</span>
            <span style={tokenPill}>"intelligence"</span>
            <span style={tokenPill}>"!"]</span>
          </div>
        </div>
        
        <p style={{ fontSize: '0.9em', color: '#6b7280' }}>
          ⚡ Notice how "artificial" was split into ["art", "ificial"] — common subwords that help the model understand similar words like "artisan" or "superficial".
        </p>
      </div>

      <p><strong>How Tokenization Works in Practice</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Text Normalization:</strong> Convert to lowercase, handle Unicode, normalize special characters.</li>
          <li><strong>Pre-tokenization:</strong> Split text into words and punctuation (using spaces and rules).</li>
          <li><strong>Subword Segmentation:</strong> Apply algorithms like <a href="https://en.wikipedia.org/wiki/Byte_pair_encoding" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">Byte-Pair Encoding (BPE)</a> or WordPiece to split words into optimal subword units.</li>
          <li><strong>Map to IDs:</strong> Convert each token to its numerical ID from the model's vocabulary.</li>
        </ol>
      </div>

      <p><strong>Tokens = Money 💰</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          backgroundColor: '#fef3c7',
          padding: '15px',
          borderRadius: '8px',
          borderLeft: '4px solid #f59e0b',
          marginBottom: '15px'
        }}>
          <strong>Important for API users:</strong> Most LLM APIs (OpenAI, Anthropic, etc.) charge by the token — both input AND output. A typical English sentence might be:
          <ul style={{ marginTop: '10px', marginBottom: '0' }}>
            <li>1 token ≈ 4 characters in English</li>
            <li>1 token ≈ ¾ of a word</li>
            <li>750 words ≈ 1000 tokens</li>
          </ul>
        </div>
        
        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          marginTop: '15px'
        }}>
          <strong>💰 Cost Example:</strong><br/>
          "The quick brown fox jumps over the lazy dog"<br/>
          <span style={{ color: '#4b5563' }}>→ ~9-10 tokens<br/>
          → If GPT-4 costs $0.03 per 1K tokens, this sentence costs ~$0.0003</span>
        </div>
      </div>

      <p><strong>Tokenization Across Different Languages</strong></p>
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
              <th style={{ padding: '12px', textAlign: 'left' }}>Language</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Text</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Approx. Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>English</td>
              <td style={{ padding: '12px' }}>"Hello, how are you?"</td>
              <td style={{ padding: '12px' }}>5-6 tokens</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>German</td>
              <td style={{ padding: '12px' }}>"Donaudampfschifffahrtsgesellschaftskapitän"</td>
              <td style={{ padding: '12px' }}>5-7 tokens (breaks into parts)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: '500' }}>Chinese</td>
              <td style={{ padding: '12px' }}>"你好，最近怎么样？"</td>
              <td style={{ padding: '12px' }}>8-10 tokens (1-2 per character)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Practical Tips for Working with Tokens</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>📏 Stay under limits:</strong> Models have max token limits (e.g., GPT-4: 8K, 32K, or 128K tokens).</li>
          <li><strong>✂️ Be concise:</strong> Shorter prompts = fewer tokens = cheaper & faster responses.</li>
          <li><strong>🔍 Use tokenizers:</strong> Most providers offer <a href="https://platform.openai.com/tokenizer" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">online tokenizers</a> to check your text.</li>
          <li><strong>💡 Whitespace matters:</strong> Spaces often count as part of tokens — "hello" and "hello " tokenize differently.</li>
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
          <strong>💡 Key Takeaway:</strong> Tokens are the fundamental building blocks that LLMs use to understand and generate language. They're not quite words and not quite letters — they're an optimized middle ground that balances vocabulary size with expressiveness. Understanding tokens helps you write better prompts, estimate costs, and debug why your model sometimes "sees" text differently than you do.
        </p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#6b7280' }}>
        <strong>Want to play with tokens?</strong> Try OpenAI's <a href="https://platform.openai.com/tokenizer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">Tokenizer Tool</a> or check out <a href="https://huggingface.co/docs/transformers/tokenizer_summary" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">Hugging Face's tokenizer documentation</a> for deeper understanding.
      </p>
    </div>
  )
    },
    {
      question: "How does self-attention work?",
      answer:
        "Self-attention allows the model to determine which words in a sentence are important by computing dot products between query and key vectors."
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
    <div style={llm_styles.blogPage}>
      <h1>🚀 Kubernetes Blog</h1>
      <p>
        Learn container orchestration, scaling, pods, services, deployments, and production architecture.
      </p>

      <div style={llm_styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} style={llm_styles.faqItem}>
            <button
              onClick={() => toggleFAQ(index)}
              style={llm_styles.faqButton}
            >
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && (
              <div style={llm_styles.faqAnswer}>{faq.answer}</div>
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





const llm_styles = {
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

const tokenPill = {
  backgroundColor: '#374151',
  color: '#e5e7eb',
  padding: '4px 8px',
  borderRadius: '4px',
  fontFamily: 'monospace',
  fontSize: '0.9em'
};


