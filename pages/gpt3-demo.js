import { useState } from 'react';
import styles from '../styles/Gpt3Demo.module.css';
import ReactTypingEffect from 'react-typing-effect'

export default function Gpt3Demo() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await fetch('/api/gpt3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await apiResponse.json();
    setResponse(data.text);
  };

  return (
    <div className={styles.container}>
      <h1>GPT-3 Demo</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={prompt}
          onChange={handleChange}
          placeholder="Enter your prompt here"
        />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
      
      {response && <div className={styles.response}>{response}</div>}
      
    </div>
  );
}


