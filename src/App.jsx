import React, { Component } from 'react';
import Fetch from 'react-fetch';

import Title from './components/Title'
import VideoStream from './components/VideoStream'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Fetch url="https://www.reddit.com/r/soccer/.json?limit=100" >
          <VideoStream />
        </Fetch>
      </div>
    );
  }
}

export default App;
