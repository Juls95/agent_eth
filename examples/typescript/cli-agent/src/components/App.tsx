import React, { useState } from 'react';

const App: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        setMessages(prev => [...prev, `You: ${input}`]);

        try {
            const response = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setMessages(prev => [...prev, `Assistant: ${data.response}`]);
        } catch (error) {
            setMessages(prev => [...prev, `Error: ${error.message}`]);
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    return (
        <div className="container">
            <h1>Uniswap Monitoring Interface</h1>
            <div className="chat-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.startsWith('You:') ? 'user' : 'assistant'}`}>
                        {msg}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Uniswap pools..."
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default App; 