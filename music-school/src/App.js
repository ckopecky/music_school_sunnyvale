import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from "./media/Music_School_Logo.png";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import History from './components/History/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      primaryNav: ['Sign In', 'Stay Informed', 'Calendar', 'Location', 'Donate'],
      secondaryNav: ['EDUCATION', 'PERFORMANCE', 'COMMUNITY']
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar 
            nav={this.state.primaryNav}
            secondaryNav={this.state.secondaryNav}
            logo={logo}
            />

        </header>
      </div>
    );
  }
}

export default App;
