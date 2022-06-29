import React from 'react';
import './App.css';

const ContextConfig = React.createContext();

const intialConfig = {
  users: [
    { name: 'Mike', online: true },
    { name: 'Tommy', online: true },
    { name: 'TJ', online: false },
    { name: 'Cody', online: false },
    { name: 'Sally', online: true },
    { name: 'Megan', online: false },
  ],
};
function App() {
  return (
    <ContextConfig.Provider value={intialConfig}>
      <div className="App">
        <h2>Challenge 3</h2>
      </div>
    </ContextConfig.Provider>
  );
}

export default App;
