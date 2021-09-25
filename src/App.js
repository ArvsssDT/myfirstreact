import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" border-radius="50%" alt="logo">
        <p>
           Nood tayo ng GP 999. Please Vote Kim Bo Ra(김보라)
        </p>

        <iframe width="1280" height="720" src="https://www.youtube.com/embed/-BJtXwBt8YY" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
         
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
