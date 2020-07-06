import React from 'react';
import { Button } from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <article className="a"></article>
      <article className="b"></article>
      <Button className="toto" onClick={() => console.info('ok')}>
        Clique moi !
      </Button>
    </div>
  );
}

export default App;
