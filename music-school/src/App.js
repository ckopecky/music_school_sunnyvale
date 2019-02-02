import React, { Component } from 'react';
import logo from "./media/New_Banner.png";
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      nav: ['History', 'Faculty', 'PRIVATE LESSONS', 'CLASSES', 'Enroll Now', 'My Account']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo"/>
          <Navbar nav={this.state.nav}/>
        </header>
      </div>
    );
  }
}

export default App;
