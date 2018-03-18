import React, { Component } from 'react';
import { createComponent } from 'react-fela'

import VideoItem from '../VideoItem';
import './videoStream.css';

class VideoStream extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/soccer/.json?limit=100')
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data.data.children });
      })
  }

  isVideoLink(url) {
    //TODO change to regex
    return url.includes('streamable') || url.includes('nya') || url.includes('youtu') || url.includes('oddshot') || url.includes('mixtape') || url.includes('clippituser') || url.includes('imgtc') || url.includes('slightclip') || url.includes('streamja');
  }

  render() {
    const { items } = this.state

    if (items.length === 0) {
      return <Loading>Loading...</Loading>
    }

    return (
      <div className="news-stream">
        {
          items.map((item) => {
            if (this.isVideoLink(item.data.url)) {
              return <VideoItem
                key={item.data.url}
                title={item.data.title}
                url={item.data.url}
                time={item.data.created_utc}
                media={item.data.media}/>
            }
          })
        }
      </div>
    );
  }
}

const Loading = createComponent(() => ({
  textAlign: 'center',
  marginTop: '30px',
  color: 'grey',
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '40px',
}));

export default VideoStream;
