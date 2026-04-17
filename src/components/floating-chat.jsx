import React, { useState } from 'react';
import './floating-chat.css';
import chatMessages from '../data/chatMessages';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(chatMessages);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => setIsOpen((open) => !open);

  const handleSend = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', type: 'text', text: trimmed },
    ]);
    setInputValue('');
  };

  const handleOptionSelect = (messageId, option) => {
    setMessages((prev) => {
      const updated = prev.map((msg) =>
        msg.id === messageId ? { ...msg, answered: true } : msg
      );

      return [
        ...updated,
        { id: Date.now() + 1, sender: 'user', type: 'text', text: option },
        {
          id: Date.now() + 2,
          sender: 'support',
          type: 'text',
          text: `Great choice! I have noted '${option}'. What else can I help you with?`,
        },
      ];
    });
  };

  return (
    <div className="floating-chat-container">
      {isOpen && (
        <div className="floating-chat-panel">
          <div className="floating-chat-header">
            <span>HomeArc Chat</span>
            <button className="floating-chat-close" onClick={handleToggle} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="floating-chat-body">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`floating-chat-message ${message.sender === 'user' ? 'user-message' : 'support-message'}`}
              >
                <p>{message.text}</p>
                {message.sender === 'support' && message.type === 'mcq' && !message.answered && (
                  <div className="mcq-options">
                    {message.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="mcq-option"
                        onClick={() => handleOptionSelect(message.id, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="floating-chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <div className="floating-chat-btn" onClick={handleToggle} aria-label="Open chat">
        {isOpen ? '✕' : '💬'}
      </div>
    </div>
  );
};

export default FloatingChat;
