import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Riju, Edit <code>src/App.js</code> and save to reload.
        </p>
          <Post/>
      </header>
    </div>
  );
}

export default App;
