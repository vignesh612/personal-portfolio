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
  question: "What are token IDs in Large Language Models?",
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
          <strong>🎯 Quick Analogy:</strong> Think of token IDs like student ID numbers in a university. Instead of calling out "Jane Smith, the Computer Science major from New York who likes pizza," every time, the university just uses "ID: 2024001". It's faster, cleaner, and references all her information stored in the database. Similarly, LLMs use token IDs as efficient references to tokens and all their learned information.
        </div>
      </div>

      <p><strong>The Concept: From Words to Numbers</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <strong>Token IDs</strong> are simply integers that represent specific tokens in the model's vocabulary. Since computers (and neural networks) work best with numbers, we need to convert every token into a unique numerical ID before feeding it into the model. It's like creating a massive phonebook where every word or subword has its own number.
      </div>

      <p><strong>Visualizing the Token-to-ID Mapping</strong></p>
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
          <div>"The cat sat on the mat"</div>
          
          <div style={{ color: '#9ca3af', marginTop: '20px', marginBottom: '10px' }}>📄 Step 1: Tokenization:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
            <span style={tokenPill}>["The"</span>
            <span style={tokenPill}>"cat"</span>
            <span style={tokenPill}>"sat"</span>
            <span style={tokenPill}>"on"</span>
            <span style={tokenPill}>"the"</span>
            <span style={tokenPill}>"mat"]</span>
          </div>
          
          <div style={{ color: '#9ca3af', marginTop: '20px', marginBottom: '10px' }}>🔢 Step 2: Map to Token IDs (simplified vocabulary):</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>[464</span>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>3782</span>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>891</span>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>47</span>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>464</span>
            <span style={{...tokenPill, backgroundColor: '#2563eb'}}>10234]</span>
          </div>
        </div>
        
        <p style={{ fontSize: '0.9em', color: '#6b7280' }}>
          ⚡ Notice how "the" appears twice and gets the same ID (464) both times — that's the whole point!
        </p>
      </div>

      <p><strong>What's in a Token ID? The Vocabulary</strong></p>
      <div style={{ marginBottom: '20px' }}>
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
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📖 Vocabulary Size</div>
            <div style={{ color: '#4b5563' }}>
              <strong>GPT-3/4:</strong> ~50,000 tokens<br/>
              <strong>LLaMA:</strong> ~32,000 tokens<br/>
              <strong>BERT:</strong> ~30,000 tokens
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🗺️ Sample Vocabulary</div>
            <div style={{ color: '#4b5563' }}>
              <code>ID 462: "and"</code><br/>
              <code>ID 463: "the"</code><br/>
              <code>ID 464: "The"</code><br/>
              <code>ID 465: "this"</code>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔢 Special Tokens</div>
            <div style={{ color: '#4b5563' }}>
              <code>[PAD]: 0</code> — Padding<br/>
              <code>[UNK]: 1</code> — Unknown<br/>
              <code>[CLS]: 101</code> — Classification<br/>
              <code>[SEP]: 102</code> — Separator
            </div>
          </div>
        </div>
      </div>

      <p><strong>Why Token IDs Matter</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>⚡ Efficiency:</strong> Processing numbers (IDs) is vastly faster than processing strings. Your GPU loves integers!</li>
          <li><strong>🎯 Lookup Tables:</strong> IDs serve as keys to look up embeddings (which we'll cover next).</li>
          <li><strong>🌐 Language Agnostic:</strong> Whether it's English, Chinese, or code, everything becomes numbers.</li>
          <li><strong>📊 Attention Mechanism:</strong> The model uses these IDs to compute relationships between tokens.</li>
        </ul>
      </div>

      <p><strong>Real Example from GPT-2's Vocabulary</strong></p>
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
              <th style={{ padding: '12px', textAlign: 'left' }}>Token ID</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Token</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px' }}>0</td>
              <td style={{ padding: '12px' }}>&lt;|endoftext|&gt;</td>
              <td style={{ padding: '12px' }}>Special end marker</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px' }}>262</td>
              <td style={{ padding: '12px' }}>"the"</td>
              <td style={{ padding: '12px' }}>Common word (lowercase)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px' }}>464</td>
              <td style={{ padding: '12px' }}>"The"</td>
              <td style={{ padding: '12px' }}>Capitalized version (different ID!)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>20498</td>
              <td style={{ padding: '12px' }}>"tokenization"</td>
              <td style={{ padding: '12px' }}>Longer word, single token</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        backgroundColor: '#e6f3ff', 
        padding: '20px', 
        borderRadius: '8px',
        borderLeft: '4px solid #2563eb',
        marginTop: '25px'
      }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Key Takeaway:</strong> Token IDs are the numerical representation of text that LLMs actually process. They're like social security numbers for words — a unique identifier that lets the model efficiently reference everything it knows about each token. When you send text to an API, it's converted to token IDs behind the scenes before the model ever sees it.
        </p>
      </div>
    </div>
  )
    },
    {
  question: "What is embedding in Large Language Models?",
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
          <strong>🎯 Quick Analogy:</strong> Imagine you're describing a person to someone. You could say "tall, friendly, loves basketball, speaks French, works as a doctor." That's 5 different dimensions of description. Embeddings are exactly that — but for words! Each word gets coordinates in a high-dimensional space where similar words cluster together.
        </div>
      </div>

      <p><strong>The Big Idea: Words Become Vectors</strong></p>
      <div style={{ marginBottom: '20px' }}>
        An <strong>embedding</strong> is a dense vector (a list of numbers) that represents the meaning of a token. Instead of using a single ID (like 464 for "The"), we use hundreds of numbers that capture semantic meaning, context, and relationships. It's like giving every word its own GPS coordinates in "meaning space."
      </div>

      <p><strong>From Token ID to Rich Representation</strong></p>
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
          <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Token ID: 464 ("The")</div>
          
          <div style={{ color: '#9ca3af', marginTop: '20px', marginBottom: '10px' }}>↓ Look up in embedding matrix ↓</div>
          
          <div style={{ color: '#9ca3af', marginTop: '20px', marginBottom: '10px' }}>📊 Embedding Vector (simplified - actual models use 768 to 4096 dimensions):</div>
          <div style={{ backgroundColor: '#374151', padding: '15px', borderRadius: '8px' }}>
            [0.23, -0.45, 0.89, 0.12, -0.67, 0.34, -0.78, 0.56, -0.23, 0.91, ...]<br/>
            <span style={{ color: '#9ca3af' }}>(768 numbers like this for BERT, 4096 for GPT-3!)</span>
          </div>
        </div>
        
        <p style={{ fontSize: '0.9em', color: '#6b7280' }}>
          ⚡ Each number represents some learned "feature" — maybe dimension 1 tracks formality, dimension 2 tracks gender, dimension 3 tracks abstractness, etc.
        </p>
      </div>

      <p><strong>The Magic: Semantic Relationships</strong></p>
      <div style={{ marginBottom: '20px' }}>
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
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>👑 King - Man + Woman = Queen</div>
            <div style={{ color: '#4b5563' }}>
              The classic example! Embeddings capture analogies through vector arithmetic.
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🇫🇷 Paris - France + Italy = Rome</div>
            <div style={{ color: '#4b5563' }}>
              Capital city relationships emerge naturally from the embedding space.
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📚 Similar Words Cluster</div>
            <div style={{ color: '#4b5563' }}>
              "dog", "puppy", "canine" have similar vectors; "car", "truck", "vehicle" form another cluster.
            </div>
          </div>
        </div>
      </div>

      <p><strong>Visualizing the Embedding Space (2D projection of 768D)</strong></p>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <pre style={{ fontFamily: 'monospace', fontSize: '0.9em', color: '#4b5563' }}>
            ↑ Dimension 2<br/>
            │        🐕 dogs<br/>
            │        🐈 cats<br/>
            │    🐎 horses<br/>
            │                🚗 cars<br/>
            │            🚲 bikes<br/>
            │                        ✈️ planes<br/>
            └────────────────────────────→ Dimension 1<br/>
            <span style={{ color: '#9ca3af' }}>Animals cluster left, vehicles cluster right</span>
          </pre>
        </div>
      </div>

      <p><strong>How Embeddings Are Created: Training</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Start random:</strong> Initialize all word vectors with random numbers.</li>
          <li><strong>Predict context:</strong> During training, the model learns to predict surrounding words (Word2Vec, GloVe) or masked words (BERT).</li>
          <li><strong>Adjust vectors:</strong> If the model predicts "cat" should appear near "furry" and "pet", it adjusts their vectors to be closer.</li>
          <li><strong>Repeat billions of times:</strong> After seeing enormous text, meaningful patterns emerge.</li>
        </ol>
      </div>

      <p><strong>Embedding Dimensions Across Models</strong></p>
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
              <th style={{ padding: '12px', textAlign: 'left' }}>Model</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Embedding Size</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>What This Means</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>Word2Vec (2013)</td>
              <td style={{ padding: '12px' }}>300 dimensions</td>
              <td style={{ padding: '12px' }}>Pioneering but simpler</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>BERT-base</td>
              <td style={{ padding: '12px' }}>768 dimensions</td>
              <td style={{ padding: '12px' }}>Balanced size/performance</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>GPT-3</td>
              <td style={{ padding: '12px' }}>4096 dimensions</td>
              <td style={{ padding: '12px' }}>Richer representations</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: '500' }}>GPT-4</td>
              <td style={{ padding: '12px' }}>Unknown (likely 8192+)</td>
              <td style={{ padding: '12px' }}>Even more nuanced</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        backgroundColor: '#e6f3ff', 
        padding: '20px', 
        borderRadius: '8px',
        borderLeft: '4px solid #2563eb',
        marginTop: '25px'
      }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Key Takeaway:</strong> Embeddings are where meaning lives in LLMs. They transform discrete tokens into continuous vectors that capture semantic relationships, analogies, and context. The "meaning space" they create is so powerful that simple vector math can solve analogies, cluster related concepts, and enable the model to understand nuance. Every token gets a rich, multi-dimensional representation that evolves as it flows through the network.
        </p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#6b7280' }}>
        <strong>Explore further:</strong> Check out <a href="https://projector.tensorflow.org/" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">TensorFlow Embedding Projector</a> to visualize real embeddings, or read <a href="https://jalammar.github.io/illustrated-word2vec/" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">The Illustrated Word2Vec</a> for deeper understanding.
      </p>
    </div>
  )
    },
    {
  question: "How does self-attention mechanism work in Large Language Models?",
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
          <strong>🎯 Quick Analogy:</strong> Imagine you're at a party trying to understand a conversation. You naturally pay more attention to certain people based on context — the person speaking loudly, the one who just asked you a question, or someone mentioning your name. Self-attention is like that, but for words! Each word looks at all other words and decides: "How much should I care about each of you right now?"
        </div>
      </div>

      <p><strong>The Core Problem: Context Matters</strong></p>
      <div style={{ marginBottom: '20px' }}>
        Consider the word "bank" in these sentences:
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '10px',
          marginBottom: '10px'
        }}>
          "I need to go to the <strong>bank</strong> to withdraw money."<br/>
          "We had a picnic by the river <strong>bank</strong>."
        </div>
        Same word, totally different meanings! Self-attention helps the model understand which meaning is correct by looking at surrounding words ("money" vs "river").
      </div>

      <p><strong>The Three Musketeers: Query, Key, Value</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔍 Query (Q)</div>
            <div style={{ color: '#4b5563' }}>
              <strong>What I'm looking for:</strong> Each word creates a query vector asking "What context do I need?"
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>🔑 Key (K)</div>
            <div style={{ color: '#4b5563' }}>
              <strong>What I offer:</strong> Each word creates a key vector saying "Here's what information I have."
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', fontSize: '1.1em' }}>📦 Value (V)</div>
            <div style={{ color: '#4b5563' }}>
              <strong>What I give:</strong> The actual content each word contributes if it's relevant.
            </div>
          </div>
        </div>
      </div>

      <p><strong>Step-by-Step: How Self-Attention Processes a Sentence</strong></p>
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
          <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Input: "The animal didn't cross the street because it was tired"</div>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Step 1: Each word creates Q, K, V vectors</div>
            <div style={{ paddingLeft: '20px', color: '#d1d5db' }}>
              "it" → Q_vector: [what does "it" refer to?]<br/>
              "animal" → K_vector: [I'm a living thing, subject of sentence]<br/>
              "street" → K_vector: [I'm a location, inanimate object]
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Step 2: Calculate attention scores (dot product of Q with all K's)</div>
            <div style={{ paddingLeft: '20px', color: '#d1d5db' }}>
              Q("it") · K("animal") = 0.95 (high attention — very relevant!)<br/>
              Q("it") · K("street") = 0.15 (low attention — not relevant)<br/>
              Q("it") · K("cross") = 0.45 (medium attention — somewhat relevant)
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Step 3: Apply softmax to get attention weights (all sum to 1)</div>
            <div style={{ paddingLeft: '20px', color: '#d1d5db' }}>
              "animal": 0.70 (70% attention)<br/>
              "cross": 0.20 (20% attention)<br/>
              "street": 0.05 (5% attention)<br/>
              others: 0.05 (5% attention combined)
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ color: '#9ca3af', marginBottom: '10px' }}>Step 4: Weighted sum of Value vectors</div>
            <div style={{ paddingLeft: '20px', color: '#d1d5db' }}>
              Output("it") = 0.70×V("animal") + 0.20×V("cross") + 0.05×V("street") + ...
            </div>
          </div>
        </div>
      </div>

      <p><strong>The Math Behind the Magic (Simplified)</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '1.1em',
          overflowX: 'auto'
        }}>
          <strong>Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V</strong>
          
          <div style={{ marginTop: '15px', fontSize: '0.9em', color: '#4b5563' }}>
            Where:<br/>
            • QKᵀ = How well queries match keys (attention scores)<br/>
            • √dₖ = Scaling factor (prevents extremely small gradients)<br/>
            • softmax = Converts scores to probabilities that sum to 1<br/>
            • V = Values to sum up based on attention weights
          </div>
        </div>
      </div>

      <p><strong>Visual Attention Map: What Words Look At</strong></p>
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
              <th style={{ padding: '12px' }}>Word</th>
              <th style={{ padding: '12px' }}>The</th>
              <th style={{ padding: '12px' }}>animal</th>
              <th style={{ padding: '12px' }}>didn't</th>
              <th style={{ padding: '12px' }}>cross</th>
              <th style={{ padding: '12px' }}>the</th>
              <th style={{ padding: '12px' }}>street</th>
              <th style={{ padding: '12px' }}>because</th>
              <th style={{ padding: '12px' }}>it</th>
              <th style={{ padding: '12px' }}>was</th>
              <th style={{ padding: '12px' }}>tired</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', fontWeight: '500' }}>it</td>
              <td style={{ padding: '12px', backgroundColor: '#e6f3ff' }}>0.02</td>
              <td style={{ padding: '12px', backgroundColor: '#2563eb', color: 'white' }}>0.70</td>
              <td style={{ padding: '12px', backgroundColor: '#e6f3ff' }}>0.03</td>
              <td style={{ padding: '12px', backgroundColor: '#93c5fd' }}>0.15</td>
              <td style={{ padding: '12px', backgroundColor: '#e6f3ff' }}>0.01</td>
              <td style={{ padding: '12px', backgroundColor: '#bfdbfe' }}>0.05</td>
              <td style={{ padding: '12px', backgroundColor: '#e6f3ff' }}>0.02</td>
              <td style={{ padding: '12px', backgroundColor: '#e6f3ff' }}>0.01</td>
              <td style={{ padding: '12px', backgroundColor: '#bfdbfe' }}>0.01</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.9em', color: '#6b7280', marginTop: '10px' }}>
          Darker blue = more attention. "it" pays most attention to "animal" to figure out what "it" refers to.
        </p>
      </div>

      <p><strong>Why Self-Attention is Revolutionary</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>🌐 Long-range dependencies:</strong> Words can directly attend to any other word, no matter how far apart.</li>
          <li><strong>⚡ Parallelizable:</strong> Unlike RNNs that process sequentially, attention computes all relationships simultaneously.</li>
          <li><strong>🎯 Dynamic context:</strong> Attention weights change based on the input, not fixed like in older models.</li>
          <li><strong>🔍 Interpretability:</strong> We can see what words focused on, helping debug model behavior.</li>
          <li><strong>🧩 Compositional:</strong> Multiple attention heads can focus on different linguistic features (syntax, semantics, etc.).</li>
        </ul>
      </div>

      <p><strong>Real Attention Patterns from Trained Models</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Head 3-1: Syntax Focus</div>
            <div style={{ color: '#4b5563' }}>
              Adjectives attend to nouns they modify<br/>
              <em>"red" → "ball"</em>
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Head 5-7: Coreference</div>
            <div style={{ color: '#4b5563' }}>
              Pronouns attend to their antecedents<br/>
              <em>"they" → "researchers"</em>
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Head 8-2: Positional</div>
            <div style={{ color: '#4b5563' }}>
              Tracks immediate neighbors in text<br/>
              <em>"next" → "word"</em>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#e6f3ff', 
        padding: '20px', 
        borderRadius: '8px',
        borderLeft: '4px solid #2563eb',
        marginTop: '25px'
      }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Key Takeaway:</strong> Self-attention is the secret sauce that makes transformers so powerful. It allows each word to dynamically weigh the importance of every other word in the sequence, creating context-aware representations. By computing these attention patterns across multiple heads and layers, models build increasingly sophisticated understanding — from basic syntax in early layers to complex semantic relationships in deeper layers. It's not just about what words mean, but how they relate in any given context.
        </p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#6b7280' }}>
        <strong>Want to see attention in action?</strong> Check out <a href="https://github.com/jessevig/bertviz" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">BertViz</a> for interactive visualizations, or read <a href="https://jalammar.github.io/illustrated-transformer/" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }} target="_blank" rel="noopener noreferrer">The Illustrated Transformer</a> for more detail.
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


