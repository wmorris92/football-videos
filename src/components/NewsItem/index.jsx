import React from 'react';
import './newsItem.css'

const CURRENT_TIME = Date.now();

const NewsItem = ({title, url, time, media}) => {
  return media ? itemWithMedia(title, url, time, media) : itemWithoutMedia(title, url, time);
  // return (
  //   <a href={url}>
  //     <div className="news-item" >
  //       <text className="item-title">{formatTitle(title)}</text>
  //       <text className="item-time">{formatTimeOne(time)}</text>
  //     </div>
  //   </a>
  // );
};

function itemWithMedia(title, url, time, media) {
  console.log(media.oembed.thumbnail_url);
  return (
    <a href={url}>
      <div className="news-item news-item-with-media">
        <div className="media-item">
          <img src={media.oembed.thumbnail_url} alt="" height="90px" width="123px"/>
        </div>
        <div className="news-item-without-media">
          <text className="item-title">{formatTitle(title, true)}</text>
          <text className="item-time">{formatTimeOne(time)}</text>
        </div>
      </div>
    </a>
  );
};

function itemWithoutMedia(title, url, time) {
  return (
    <a href={url}>
      <div className="news-item news-item-without-media" >
        <text className="item-title">{formatTitle(title, false)}</text>
        <text className="item-time">{formatTimeOne(time)}</text>
      </div>
    </a>
  );
};

function formatTitle(title, withMedia) {
  const titleLimit = withMedia ? 90 : 200;
  if (title.length > titleLimit) {
    return `${title.substr(0, titleLimit)}...`
  } else {
    return title
  }
};

function formatTimeOne(time) {
  let timeAgoInSec = Math.round((CURRENT_TIME / 1000) - time);
  let minutesAgo = Math.round(timeAgoInSec/60);
  if (minutesAgo < 60) {
    return (minutesAgo === 1) ? `${minutesAgo} minute ago` : `${minutesAgo} minutes ago`;
  }
  let hoursAgo = Math.round(minutesAgo/60)
  return (hoursAgo === 1) ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
};

export default NewsItem;
