import { useState } from 'react';
import data from './components/data';
import DisplayNestedObject from './components/DisplayNestedObject';
import './App.css';

function App() {
  const [nestedObject, setNestedObject] = useState(data);

  return (
    <div className="App">
      <DisplayNestedObject data={nestedObject} />
    </div>
  );
}

export default App;
