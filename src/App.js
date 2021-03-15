import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Main from './components/Main'
import { Grid } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <Grid container direction = "column">
        <Topbar/>
        <Main/>
      </Grid>
    </div>
  );
}

export default App;
