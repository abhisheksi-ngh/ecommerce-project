import { useState } from 'react';
import API from '../services/api';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, from: 'user' };
    setMessages(prev => [...prev, userMsg]);
    
    try {
      const res = await API.post('/chat', { 
        message: input, 
        userEmail: 'client@luxemern.com' 
      });
      setMessages(prev => [...prev, { text: res.data.response, from: 'bot' }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: 'Pardon, je suis momentanément indisponible.', from: 'bot' }]);
    }
    setInput('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={() => setOpen(!open)} 
        className="bg-black text-paris-gold p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {open && (
        <div className="absolute bottom-20 right-0 w-96 card p-0 h-96 flex flex-col">
          <div className="bg-black text-paris-gold p-5 rounded-t-xl">
            <h3 className="font-bold text-lg">Concierge IA</h3>
            <p className="text-xs opacity-80">Votre styliste personnel</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'user' ? 'text-right' : 'text-left'}>
                <span className={`inline-block p-3 rounded-xl max-w-xs text-sm ${
                  m.from === 'user' 
                    ? 'bg-paris-gold text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && send()}
              placeholder="Posez votre question..."
              className="flex-1 input-elegant text-sm"
            />
            <button onClick={send} className="bg-paris-gold text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition">
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;