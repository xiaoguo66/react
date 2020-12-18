import React from 'react';
import './App.css';
import Testdate  from "./components/testdate";
function App() {
  const str = 'hello word!'
  return (
    <div className="App">
      {str}
      <Testdate />            
    </div>
  );
}

export default App;
