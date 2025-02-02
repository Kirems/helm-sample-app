import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {process.env.REACT_APP_NAME}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn {process.env.REACT_APP_KUKU}
         DONt learn {process.env.REACT_APP_NAME}
        </a>
      </header>
    </div>
  );
}

export default App;
