import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my website
        </p>
        <a
          className="App-link"
          href="https://davidruss.dev/about.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my portfolio
        </a>
      </header>
    </div>
  );
}

export default App;