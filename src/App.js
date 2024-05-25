
import React, { useEffect, useState } from 'react';
import config from './config';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${config.API_URL}/endpoint`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from API: {data ? JSON.stringify(data) : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
