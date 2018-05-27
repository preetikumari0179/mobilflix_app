import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/search';
import Content from './component/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="Header">
          <div id="logo" class="Logo">
          </div>
          <Search></Search>
          <Content></Content>
        </header>
      </div>
    );
  }
}

export default App;
