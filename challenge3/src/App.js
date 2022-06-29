import React from 'react';
import UserList from './components/UserList';
import './App.css';

export const ContextConfig = React.createContext();

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
        <UserList />
      </div>
    </ContextConfig.Provider>
  );
}

export default App;
