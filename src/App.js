import './App.css';
import Mono from './components/Mono';
import Emoji from "./components/Emoji";

function App() {
  return (
    <div className="App">
      <div className="mono">
        <div className="title">
          Random Mono generator
        </div>

      <Mono />
      </div>
    </div>
  );
}

export default App;
