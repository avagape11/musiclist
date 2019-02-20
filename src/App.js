import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { TextField, Button } from '@material-ui/core';

class App extends Component {
  state = {
    searchTerm: ''
  }
  onTextChange = (event) => {
    const value = event.target.value;
    this.setState({searchTerm: value});
  }

  onSearchClick = () => {
    console.log(this.state.searchTerm);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
          <TextField  
            placeholder="Search" 
            onChange={this.onTextChange} 
            value={this.state.searchTerm}
            />
          <Button onClick={this.onSearchClick} disabled={this.state.searchTerm.length === 0}>Go</Button>
        </Toolbar>
        </AppBar>
        </header>
      
      </div>
    );
  }
}

export default App;
