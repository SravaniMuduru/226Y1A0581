import React from 'react';
import Comments from './components/Comments';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Postman comments</h1>
      <Comments postId={150}/>
    </div>
  );
}

export default App;
