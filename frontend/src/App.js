import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    // Вызываем наш бэкенд эндпоинт
    fetch("http://localhost:8081/api/hello")
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(err => setBackendMessage("Ошибка: " + err));
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h1>React + Jenkins Demo</h1>
      <p>Ответ от бэкенда: {backendMessage}</p>
    </div>
  );
}

export default App;
