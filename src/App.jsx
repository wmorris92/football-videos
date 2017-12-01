import React, { Component } from 'react';
import Fetch from 'react-fetch';

import Title from './components/Title'
import VideoStream from './components/VideoStream'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <VideoStream />
      </div>
    );
  }
}

export default App;
