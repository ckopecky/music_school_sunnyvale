import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from "./media/Music_School_Logo.png";
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      primaryNav: ['Sign In', 'Stay Informed', 'Calendar', 'Location', 'Donate'],
      secondaryNav: ['EDUCATION', 'PERFORMANCE', 'COMMUNITY'],
      education: ['New to The Music School?', 'Enroll', 'Group Classes', 'Private Lessons', 'Summer Classes', 'Faculty'],
      community: ['Partners', 'Resources', 'Need a Musician?'],
      performance: ['Events Calendar', 'Student Recitals', 'Sunnyvale Presbyterian Church']
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar 
            nav={this.state.primaryNav}
            secondaryNav={this.state.secondaryNav}
            education={this.state.education}
            community={this.state.community}
            performance={this.state.performance}
            logo={logo}
            />

        </header>
      </div>
    );
  }
}

export default App;
