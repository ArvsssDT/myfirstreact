import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Gusto ko na manood ng latest episode ng GP 999
        </p>
        <a
          className="App-link"
          href="https://www.iq.com/play/girls-planet-999-12199gfpr0x?frmrp=home&frmb=R:37824992012&frmrs=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Girls Planet 999 here
        </a>
      </header>
    </div>
  );
}

export default App;
