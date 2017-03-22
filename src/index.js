import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'react-fetch';

import Title from './components/Title'
import NewsStream from './components/NewsStream'
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Fetch url="https://www.reddit.com/r/soccer/.json?limit=100" >
          <NewsStream />
        </Fetch>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
