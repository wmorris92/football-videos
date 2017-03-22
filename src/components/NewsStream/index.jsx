import React, { Component } from 'react';

import NewsItem from '../NewsItem';
import './newsStream.css';

class NewsStream extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  isVideoLink(url) {
    //TODO change to regex
    return url.includes('streamable') || url.includes('nya') || url.includes('youtu') || url.includes('oddshot') || url.includes('mixtape') || url.includes('clippituser');
  }

  render() {
    let newsItems = [];
    if (this.props.data) {
      newsItems = this.props.data.children;
    }
    return (
      <div className="news-stream">
        {
          newsItems.map((item) => {
            if (this.isVideoLink(item.data.url)) {
              return <NewsItem
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

export default NewsStream;
