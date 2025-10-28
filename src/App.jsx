import { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const testarBackend = async () => {
    try {
      const res = await fetch('http://localhost:3000/ping');
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Erro ao conectar com o backend');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial',
      }}
    >
      <h1>Teste de Integração</h1>
      <p>Frontend React ↔ Backend Express</p>
      <button
        onClick={testarBackend}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Testar Conexão
      </button>
      <p style={{ marginTop: 20 }}>{response}</p>
    </div>
  );
}

export default App;

