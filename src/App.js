import React, { Component } from 'react';
import './App.css';
import './fontello/css/fontello.css';
import Navbar from './components/Navbar';
import Front from './components/Front';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menuback col-12 header-top-menuback">
          <Navbar />
        </div>
        <Front />
      </React.Fragment>
    )
  }
}

export default App
