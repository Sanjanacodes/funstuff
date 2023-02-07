import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';


function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );*/
  return (
    <div style = {{
      display : "flex",
      justifyContent : "center",
      marginTop : '30px',
      alignItems : "center"
    }}>
      <Box color="black"
      bgcolor = "pink" p={5}>
      Here's a little proposal :
      Will you be mine forever?
      </Box>
    </div>
  )
}

export default App;
