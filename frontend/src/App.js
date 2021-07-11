import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

	const apiRequest = () => {
		console.log('apiRequest');
		axios("/api/auth/currentUser").then(response => {
			console.log('response', response)
	});
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Как дела, Докер?!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	<button onClick={apiRequest}> api request</button>
    </div>
  );
}

export default App;
