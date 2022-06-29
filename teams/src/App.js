import './App.css';
import FormTeams from './components/FormTeams';
import PLAYERS from './components/players';

function App() {
  console.log(PLAYERS);
  return (
    <div className="App">
      <FormTeams players={PLAYERS} />
    </div>
  );
}

export default App;
