import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <div className="App">
        {/* <header className="App-header">
          <motion.div
            style={{
              background: 'black',
              borderRadius: '30px',
              width: '150px',
              height: '150px'
            }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          />

          <Typography variant="body1" gutterBottom>
            Edit <code>src/App.js</code> and save to reload.
          </Typography>

          <Button variant="contained" color="primary"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Button>
        </header> */}
      </div>
    </React.Fragment>
  );
}

export default App;
