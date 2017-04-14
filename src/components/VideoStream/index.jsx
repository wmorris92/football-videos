import React, { Component } from 'react';

import VideoItem from '../VideoItem';
import './videoStream.css';

class VideoStream extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  isVideoLink(url) {
    //TODO change to regex
    return url.includes('streamable') || url.includes('nya') || url.includes('youtu') || url.includes('oddshot') || url.includes('mixtape') || url.includes('clippituser');
  }

  render() {
    let videoItems = [];
    if (this.props.data) {
      videoItems = this.props.data.children;
    }
    return (
      <div className="news-stream">
        {
          videoItems.map((item) => {
            if (this.isVideoLink(item.data.url)) {
              return <VideoItem
                key={item.data.url}
                title={item.data.title}
                url={item.data.url}
                redditUrl={`http://www.reddit.com${item.data.permalink}`}
                time={item.data.created_utc}
                media={item.data.media}/>
            }
          })
        }
      </div>
    );
  }
}

export default VideoStream;
