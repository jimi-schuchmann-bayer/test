import React, { useState } from 'react';
import { Send, MessageSquare, Sparkles } from 'lucide-react';
import './SalesAnalyticsChat.css';

const SalesAnalyticsChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'assistant', text: string }>>([
    {
      type: 'assistant',
      text: 'Hello! I\'m your Sales Analytics Assistant. Ask me anything about sales performance, customer trends, or product insights.'
    }
  ]);

  const suggestedQuestions = [
    'Which customers have the highest growth potential?',
    'What are the top performing products this quarter?',
    'Show me customers at risk of churn',
    'Compare corn seed sales across regions'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'assistant',
        text: 'Based on your query, I\'ve analyzed the data. The top 5 customers with highest growth potential are: Green Valley Farms (450 acres untapped), Riverside Agriculture (380 acres), Sunset Farms (320 acres), Prairie View Co-op (290 acres), and Heritage Growers (265 acres). Would you like detailed recommendations?'
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <section className="sales-analytics-chat">
      <div className="section-header">
        <div className="header-left">
          <MessageSquare size={24} />
          <h2>Sales Analytics Assistant</h2>
        </div>
        <div className="ai-badge">
          <Sparkles size={14} />
          <span>AI Powered</span>
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="suggested-questions">
          <p className="suggestions-label">Suggested questions:</p>
          <div className="suggestions-grid">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="suggestion-button"
                onClick={() => setMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about sales trends, customer insights, or product performance..."
            value={message}
            onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
          />
          <button type="submit" className="send-button" aria-label="Send message">
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SalesAnalyticsChat;