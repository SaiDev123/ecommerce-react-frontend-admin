import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Navigation from './navigation';

export default class App extends Component {
  render() {
    return (
      <div>

              <HashRouter>
            
            <Navigation></Navigation>
  
            </HashRouter>
      </div>
    );
  }
}
